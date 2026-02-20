"""
ML-based match prediction service
"""

import pickle
import numpy as np
import os

class MLMatchPredictor:
    """
    Wrapper for ML model predictions
    """
    
    def __init__(self, model_path='cricket_ml_model.pkl', scaler_path='model_scaler.pkl'):
        self.load_model(model_path, scaler_path)
    
    def load_model(self, model_path, scaler_path):
        """Load trained model and scaler"""
        try:
            # Get the directory where this script is located
            script_dir = os.path.dirname(os.path.abspath(__file__))
            
            # Build absolute paths
            model_full_path = os.path.join(script_dir, os.path.basename(model_path))
            scaler_full_path = os.path.join(script_dir, os.path.basename(scaler_path))
            feature_names_path = os.path.join(script_dir, 'feature_names.pkl')
            
            print(f"Loading model from: {model_full_path}")
            
            with open(model_full_path, 'rb') as f:
                self.model = pickle.load(f)
            
            with open(scaler_full_path, 'rb') as f:
                self.scaler = pickle.load(f)
            
            with open(feature_names_path, 'rb') as f:
                self.feature_names = pickle.load(f)
            
            print("✅ ML Model loaded successfully!")
            
        except FileNotFoundError as e:
            print(f"❌ Model files not found: {e}")
            print(f"Looking in directory: {script_dir}")
            self.model = None
            self.scaler = None
            self.feature_names = None
            
        except Exception as e:
            print(f"❌ Error loading model: {e}")
            self.model = None
            self.scaler = None
            self.feature_names = None
    
    def prepare_features(self, match_data):
        """
        Convert match data to feature vector
        
        match_data should contain:
        - team1_rating, team2_rating
        - team1_form, team2_form (0-20 scale)
        - team1_home, team2_home, neutral_venue
        - team1_won_toss, toss_bat
        - format (test/odi/t20)
        - weather (sunny/cloudy/overcast/humid)
        - pitch_type
        """
        
        features = {
            'team1_rating': match_data.get('team1_rating', 75),
            'team2_rating': match_data.get('team2_rating', 75),
            'team1_form': match_data.get('team1_form', 10),
            'team2_form': match_data.get('team2_form', 10),
            'rating_difference': match_data.get('team1_rating', 75) - match_data.get('team2_rating', 75),
            
            'team1_home': 1 if match_data.get('venue_team') == 'team1' else 0,
            'team2_home': 1 if match_data.get('venue_team') == 'team2' else 0,
            'neutral_venue': 1 if match_data.get('venue_team') == 'neutral' else 0,
            
            'team1_won_toss': 1 if match_data.get('toss_winner') == 'team1' else 0,
            'toss_bat': 1 if match_data.get('toss_decision') == 'bat' else 0,
            
            'format_test': 1 if match_data.get('format') == 'test' else 0,
            'format_odi': 1 if match_data.get('format') == 'odi' else 0,
            'format_t20': 1 if match_data.get('format') == 't20' else 0,
            
            'weather_sunny': 1 if match_data.get('weather') == 'sunny' else 0,
            'weather_cloudy': 1 if match_data.get('weather') == 'cloudy' else 0,
            'weather_overcast': 1 if match_data.get('weather') == 'overcast' else 0,
            'weather_humid': 1 if match_data.get('weather') == 'humid' else 0,
            
            'pitch_batting_paradise': 1 if match_data.get('pitch_type') == 'batting_paradise' else 0,
            'pitch_batting_friendly': 1 if match_data.get('pitch_type') == 'batting_friendly' else 0,
            'pitch_balanced': 1 if match_data.get('pitch_type') == 'balanced' else 0,
            'pitch_bowling_friendly': 1 if match_data.get('pitch_type') == 'bowling_friendly' else 0,
            'pitch_green_seamer': 1 if match_data.get('pitch_type') == 'green_seamer' else 0,
            'pitch_spin_friendly': 1 if match_data.get('pitch_type') == 'spin_friendly' else 0,
        }
        
        # Ensure correct order
        feature_vector = [features[name] for name in self.feature_names]
        
        return np.array(feature_vector).reshape(1, -1)
    
    def predict(self, match_data):
        """
        Predict match outcome
        
        Returns:
        - team1_win_probability: float (0-100)
        - team2_win_probability: float (0-100)
        - prediction: 'team1' or 'team2'
        - confidence: 'low', 'medium', 'high', 'very_high'
        """
        
        if self.model is None:
            return {
                'error': 'Model not loaded',
                'team1_win_probability': 50.0,
                'team2_win_probability': 50.0,
                'prediction': 'team1',
                'confidence': 'low'
            }
        
        # Prepare features
        X = self.prepare_features(match_data)
        
        # Scale features
        X_scaled = self.scaler.transform(X)
        
        # Predict
        prediction = self.model.predict(X_scaled)[0]
        probabilities = self.model.predict_proba(X_scaled)[0]
        
        team1_prob = probabilities[1] * 100
        team2_prob = probabilities[0] * 100
        
        # Determine confidence
        prob_diff = abs(team1_prob - team2_prob)
        if prob_diff >= 30:
            confidence = 'very_high'
        elif prob_diff >= 20:
            confidence = 'high'
        elif prob_diff >= 10:
            confidence = 'medium'
        else:
            confidence = 'low'
        
        return {
            'team1_win_probability': round(team1_prob, 2),
            'team2_win_probability': round(team2_prob, 2),
            'prediction': 'team1' if prediction == 1 else 'team2',
            'confidence': confidence,
            'model_type': type(self.model).__name__
        }