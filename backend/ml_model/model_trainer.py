"""
Train machine learning models for cricket match prediction
"""

import pandas as pd
import numpy as np
import pickle
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score, roc_auc_score, classification_report, confusion_matrix
import warnings
warnings.filterwarnings('ignore')

class CricketMatchPredictor:
    """
    Machine Learning model for cricket match prediction
    """
    
    def __init__(self):
        self.models = {
            'logistic': LogisticRegression(max_iter=1000, random_state=42),
            'random_forest': RandomForestClassifier(n_estimators=100, random_state=42, max_depth=10),
            'gradient_boost': GradientBoostingClassifier(n_estimators=100, random_state=42, max_depth=5)
        }
        self.best_model = None
        self.scaler = StandardScaler()
        self.feature_names = None
        
    def prepare_data(self, df):
        """Prepare data for training"""
        # Separate features and target
        X = df.drop('team1_won', axis=1)
        y = df['team1_won']
        
        self.feature_names = X.columns.tolist()
        
        return X, y
    
    def train_models(self, X_train, y_train, X_test, y_test):
        """Train multiple models and compare"""
        results = {}
        
        print("\n" + "="*60)
        print("TRAINING MACHINE LEARNING MODELS")
        print("="*60)
        
        for name, model in self.models.items():
            print(f"\nTraining {name.upper().replace('_', ' ')}...")
            
            # Train model
            model.fit(X_train, y_train)
            
            # Predictions
            y_pred_train = model.predict(X_train)
            y_pred_test = model.predict(X_test)
            y_pred_proba = model.predict_proba(X_test)[:, 1]
            
            # Metrics
            train_acc = accuracy_score(y_train, y_pred_train)
            test_acc = accuracy_score(y_test, y_pred_test)
            precision = precision_score(y_test, y_pred_test)
            recall = recall_score(y_test, y_pred_test)
            f1 = f1_score(y_test, y_pred_test)
            roc_auc = roc_auc_score(y_test, y_pred_proba)
            
            # Cross-validation
            cv_scores = cross_val_score(model, X_train, y_train, cv=5, scoring='accuracy')
            
            results[name] = {
                'model': model,
                'train_accuracy': train_acc,
                'test_accuracy': test_acc,
                'precision': precision,
                'recall': recall,
                'f1_score': f1,
                'roc_auc': roc_auc,
                'cv_mean': cv_scores.mean(),
                'cv_std': cv_scores.std()
            }
            
            print(f"  Training Accuracy: {train_acc:.4f}")
            print(f"  Test Accuracy: {test_acc:.4f}")
            print(f"  Precision: {precision:.4f}")
            print(f"  Recall: {recall:.4f}")
            print(f"  F1 Score: {f1:.4f}")
            print(f"  ROC-AUC: {roc_auc:.4f}")
            print(f"  CV Score: {cv_scores.mean():.4f} (+/- {cv_scores.std():.4f})")
        
        return results
    
    def select_best_model(self, results):
        """Select best model based on test accuracy"""
        best_name = max(results.items(), key=lambda x: x[1]['test_accuracy'])[0]
        self.best_model = results[best_name]['model']
        
        print("\n" + "="*60)
        print(f"BEST MODEL SELECTED: {best_name.upper().replace('_', ' ')}")
        print("="*60)
        print(f"Test Accuracy: {results[best_name]['test_accuracy']:.4f}")
        print(f"F1 Score: {results[best_name]['f1_score']:.4f}")
        print(f"ROC-AUC: {results[best_name]['roc_auc']:.4f}")
        
        return best_name, results[best_name]
    
    def get_feature_importance(self):
        """Get feature importance from best model"""
        if hasattr(self.best_model, 'feature_importances_'):
            importance = self.best_model.feature_importances_
            feature_imp = pd.DataFrame({
                'feature': self.feature_names,
                'importance': importance
            }).sort_values('importance', ascending=False)
            return feature_imp
        elif hasattr(self.best_model, 'coef_'):
            importance = np.abs(self.best_model.coef_[0])
            feature_imp = pd.DataFrame({
                'feature': self.feature_names,
                'importance': importance
            }).sort_values('importance', ascending=False)
            return feature_imp
        return None
    
    def save_model(self, model_path='cricket_ml_model.pkl', scaler_path='model_scaler.pkl'):
        """Save trained model and scaler"""
        with open(model_path, 'wb') as f:
            pickle.dump(self.best_model, f)
        
        with open(scaler_path, 'wb') as f:
            pickle.dump(self.scaler, f)
        
        # Save feature names
        with open('feature_names.pkl', 'wb') as f:
            pickle.dump(self.feature_names, f)
        
        print(f"\nModel saved to {model_path}")
        print(f"Scaler saved to {scaler_path}")
    
    def load_model(self, model_path='cricket_ml_model.pkl', scaler_path='model_scaler.pkl'):
        """Load trained model and scaler"""
        with open(model_path, 'rb') as f:
            self.best_model = pickle.load(f)
        
        with open(scaler_path, 'rb') as f:
            self.scaler = pickle.load(f)
        
        with open('feature_names.pkl', 'rb') as f:
            self.feature_names = pickle.load(f)
        
        print(f"Model loaded from {model_path}")

def train_and_save_model(data_path='cricket_training_data.csv'):
    """Main training pipeline"""
    print("Loading training data...")
    df = pd.read_csv(data_path)
    
    print(f"Dataset shape: {df.shape}")
    print(f"Features: {df.shape[1] - 1}")
    print(f"Samples: {df.shape[0]}")
    
    # Initialize predictor
    predictor = CricketMatchPredictor()
    
    # Prepare data
    X, y = predictor.prepare_data(df)
    
    # Split data
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42, stratify=y
    )
    
    print(f"\nTraining set: {len(X_train)} samples")
    print(f"Test set: {len(X_test)} samples")
    
    # Scale features
    X_train_scaled = predictor.scaler.fit_transform(X_train)
    X_test_scaled = predictor.scaler.transform(X_test)
    
    # Train models
    results = predictor.train_models(X_train_scaled, y_train, X_test_scaled, y_test)
    
    # Select best model
    best_name, best_result = predictor.select_best_model(results)
    
    # Feature importance
    print("\n" + "="*60)
    print("TOP 10 MOST IMPORTANT FEATURES")
    print("="*60)
    feature_imp = predictor.get_feature_importance()
    if feature_imp is not None:
        print(feature_imp.head(10).to_string(index=False))
    
    # Confusion Matrix
    print("\n" + "="*60)
    print("CONFUSION MATRIX (Test Set)")
    print("="*60)
    y_pred = predictor.best_model.predict(X_test_scaled)
    cm = confusion_matrix(y_test, y_pred)
    print(f"True Negatives:  {cm[0][0]}")
    print(f"False Positives: {cm[0][1]}")
    print(f"False Negatives: {cm[1][0]}")
    print(f"True Positives:  {cm[1][1]}")
    
    # Classification Report
    print("\n" + "="*60)
    print("CLASSIFICATION REPORT")
    print("="*60)
    print(classification_report(y_test, y_pred, target_names=['Team2 Win', 'Team1 Win']))
    
    # Save model
    predictor.save_model()
    
    return predictor, results

if __name__ == '__main__':
    # First generate training data
    from training_data_generator import save_training_data
    
    print("Step 1: Generating training data...")
    save_training_data()
    
    print("\n\nStep 2: Training models...")
    predictor, results = train_and_save_model()
    
    print("\n" + "="*60)
    print("TRAINING COMPLETE!")
    print("="*60)