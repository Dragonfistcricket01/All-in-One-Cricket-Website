from flask import Flask, request, jsonify
from flask_cors import CORS
import sys
import os

# Add ml_model directory to path
sys.path.append(os.path.join(os.path.dirname(__file__), 'ml_model'))

from match_predictor_ml import MLMatchPredictor

app = Flask(__name__)
CORS(app)

# Initialize ML predictor
try:
    ml_predictor = MLMatchPredictor(
        model_path='ml_model/cricket_ml_model.pkl',
        scaler_path='ml_model/model_scaler.pkl'
    )
    print("✅ ML Model loaded successfully!")
except Exception as e:
    print(f"⚠️ Warning: Could not load ML model: {e}")
    ml_predictor = None

# Team ratings mapping
TEAM_RATINGS = {
    'india': 85,
    'australia': 88,
    'england': 82,
    'pakistan': 78,
    'newzealand': 80,
    'southafrica': 81,
    'srilanka': 72,
    'westindies': 70,
    'bangladesh': 65,
    'afghanistan': 68
}

@app.route('/api/ml-predict', methods=['POST'])
def ml_predict_match():
    """
    ML-based match prediction endpoint
    
    Expected JSON:
    {
        "team1": "india",
        "team2": "australia",
        "format": "odi",
        "venue": "home/away/neutral",
        "toss_winner": "team1/team2",
        "toss_decision": "bat/bowl",
        "weather": "sunny/cloudy/overcast/humid",
        "pitch_type": "batting_paradise/batting_friendly/balanced/etc",
        "team1_form": 15,  // 0-20 scale
        "team2_form": 12
    }
    """
    
    if ml_predictor is None:
        return jsonify({
            'error': 'ML model not available. Please train the model first.',
            'success': False
        }), 503
    
    try:
        data = request.json
        
        # Validate required fields
        required_fields = ['team1', 'team2', 'format']
        for field in required_fields:
            if field not in data:
                return jsonify({
                    'error': f'Missing required field: {field}',
                    'success': False
                }), 400
        
        # Get team ratings
        team1_rating = TEAM_RATINGS.get(data['team1'].lower(), 75)
        team2_rating = TEAM_RATINGS.get(data['team2'].lower(), 75)
        
        # Prepare match data for ML model
        match_data = {
            'team1_rating': team1_rating,
            'team2_rating': team2_rating,
            'team1_form': data.get('team1_form', 10),
            'team2_form': data.get('team2_form', 10),
            'venue_team': data.get('venue', 'neutral'),  # 'team1', 'team2', or 'neutral'
            'toss_winner': data.get('toss_winner', 'team1'),
            'toss_decision': data.get('toss_decision', 'bat'),
            'format': data.get('format', 'odi'),
            'weather': data.get('weather', 'sunny'),
            'pitch_type': data.get('pitch_type', 'balanced')
        }
        
        # Get ML prediction
        prediction = ml_predictor.predict(match_data)
        
        # Add team names to response
        prediction['team1_name'] = data['team1']
        prediction['team2_name'] = data['team2']
        prediction['success'] = True
        
        return jsonify(prediction), 200
        
    except Exception as e:
        return jsonify({
            'error': str(e),
            'success': False
        }), 500

@app.route('/api/ml-model-info', methods=['GET'])
def ml_model_info():
    """Get information about the ML model"""
    
    if ml_predictor is None:
        return jsonify({
            'available': False,
            'message': 'ML model not loaded. Please train the model first.'
        }), 200
    
    return jsonify({
        'available': True,
        'model_type': type(ml_predictor.model).__name__,
        'num_features': len(ml_predictor.feature_names),
        'features': ml_predictor.feature_names,
        'message': 'ML model is ready for predictions'
    }), 200

@app.route('/api/teams', methods=['GET'])
def get_teams():
    """Get available teams and their ratings"""
    teams = [
        {'id': key, 'name': key.capitalize(), 'rating': value}
        for key, value in TEAM_RATINGS.items()
    ]
    return jsonify({'teams': teams}), 200

if __name__ == '__main__':
    app.run(debug=True, port=5001)