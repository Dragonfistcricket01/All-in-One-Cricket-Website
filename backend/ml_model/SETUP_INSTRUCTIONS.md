# ML Model Setup Instructions

## Step 1: Install Python Dependencies
```bash
cd backend
pip install -r requirements.txt
```

## Step 2: Generate Training Data
```bash
cd ml_model
python training_data_generator.py
```

This will create `cricket_training_data.csv` with 5000 synthetic matches.

## Step 3: Train the Model
```bash
python model_trainer.py
```

This will:
- Load the training data
- Train 3 different ML models (Logistic Regression, Random Forest, Gradient Boosting)
- Compare their performance
- Select the best model
- Save the model as `cricket_ml_model.pkl`
- Save the scaler as `model_scaler.pkl`

Training should take 1-2 minutes.

## Step 4: Start the Flask API
```bash
cd ..
python app.py
```

The API will run on `http://localhost:5000`

## Step 5: Test the API

Test endpoint:
```bash
curl -X POST http://localhost:5000/api/ml-predict \
  -H "Content-Type: application/json" \
  -d '{
    "team1": "india",
    "team2": "australia",
    "format": "odi",
    "venue": "team1",
    "toss_winner": "team1",
    "toss_decision": "bat",
    "weather": "sunny",
    "pitch_type": "batting_friendly",
    "team1_form": 15,
    "team2_form": 12
  }'
```

## Expected Output
```json
{
  "team1_win_probability": 62.45,
  "team2_win_probability": 37.55,
  "prediction": "team1",
  "confidence": "high",
  "model_type": "RandomForestClassifier",
  "team1_name": "india",
  "team2_name": "australia",
  "success": true
}
```

## Troubleshooting

**Model not found error:**
- Make sure you ran `model_trainer.py` first
- Check that `.pkl` files exist in `ml_model/` directory

**Import errors:**
- Verify all packages from `requirements.txt` are installed
- Try: `pip install --upgrade scikit-learn pandas numpy`

**Port already in use:**
- Change port in `app.py`: `app.run(debug=True, port=5001)`