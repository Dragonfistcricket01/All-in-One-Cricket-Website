"""
Generate synthetic training data for cricket match prediction
Based on historical patterns and cricket statistics
"""

import pandas as pd
import numpy as np
from datetime import datetime, timedelta
import random

# Team strength ratings (out of 100)
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

# Venue advantage (home team gets this bonus)
HOME_ADVANTAGE = 8

# Format multipliers
FORMAT_MULTIPLIERS = {
    'test': 1.0,
    'odi': 1.1,
    't20': 1.2
}

def generate_training_data(num_matches=5000):
    """
    Generate synthetic cricket match data for ML training
    """
    data = []
    teams = list(TEAM_RATINGS.keys())
    
    for i in range(num_matches):
        # Random match setup
        team1 = random.choice(teams)
        team2 = random.choice([t for t in teams if t != team1])
        
        format_type = random.choice(['test', 'odi', 't20'])
        
        # Venue - 70% home matches, 30% neutral
        if random.random() < 0.7:
            venue_country = random.choice([team1, team2])
        else:
            venue_country = 'neutral'
        
        # Toss
        toss_winner = random.choice([team1, team2])
        toss_decision = random.choice(['bat', 'bowl'])
        
        # Weather
        weather = random.choice(['sunny', 'cloudy', 'overcast', 'humid'])
        
        # Pitch type
        pitch_type = random.choice([
            'batting_paradise', 'batting_friendly', 'balanced', 
            'bowling_friendly', 'green_seamer', 'spin_friendly'
        ])
        
        # Calculate base strengths
        team1_strength = TEAM_RATINGS[team1]
        team2_strength = TEAM_RATINGS[team2]
        
        # Apply home advantage
        if venue_country == team1:
            team1_strength += HOME_ADVANTAGE
        elif venue_country == team2:
            team2_strength += HOME_ADVANTAGE
        
        # Recent form (random -10 to +10)
        team1_form = random.randint(-10, 10)
        team2_form = random.randint(-10, 10)
        
        team1_strength += team1_form
        team2_strength += team2_form
        
        # Toss advantage (small impact)
        if toss_winner == team1:
            team1_strength += random.randint(1, 3)
        else:
            team2_strength += random.randint(1, 3)
        
        # Weather impact
        weather_impact = random.uniform(-2, 2)
        team1_strength += weather_impact
        team2_strength -= weather_impact
        
        # Pitch impact based on team style
        # Spin-friendly teams do better on spin pitches, etc.
        if pitch_type in ['spin_friendly', 'dusty_turner']:
            if team1 in ['india', 'srilanka', 'pakistan']:
                team1_strength += 3
            if team2 in ['india', 'srilanka', 'pakistan']:
                team2_strength += 3
        elif pitch_type in ['green_seamer', 'bowling_friendly']:
            if team1 in ['australia', 'england', 'newzealand', 'southafrica']:
                team1_strength += 3
            if team2 in ['australia', 'england', 'newzealand', 'southafrica']:
                team2_strength += 3
        
        # Format multiplier
        format_mult = FORMAT_MULTIPLIERS[format_type]
        
        # Calculate win probability
        strength_diff = (team1_strength - team2_strength) * format_mult
        
        # Convert to probability using logistic function
        team1_win_prob = 1 / (1 + np.exp(-strength_diff / 15))
        
        # Determine winner (with some randomness)
        winner = team1 if random.random() < team1_win_prob else team2
        
        # Create feature row
        match_data = {
            # Team features
            'team1_rating': TEAM_RATINGS[team1],
            'team2_rating': TEAM_RATINGS[team2],
            'team1_form': team1_form + 10,  # Normalize to 0-20
            'team2_form': team2_form + 10,
            'rating_difference': TEAM_RATINGS[team1] - TEAM_RATINGS[team2],
            
            # Home advantage
            'team1_home': 1 if venue_country == team1 else 0,
            'team2_home': 1 if venue_country == team2 else 0,
            'neutral_venue': 1 if venue_country == 'neutral' else 0,
            
            # Toss
            'team1_won_toss': 1 if toss_winner == team1 else 0,
            'toss_bat': 1 if toss_decision == 'bat' else 0,
            
            # Format
            'format_test': 1 if format_type == 'test' else 0,
            'format_odi': 1 if format_type == 'odi' else 0,
            'format_t20': 1 if format_type == 't20' else 0,
            
            # Weather
            'weather_sunny': 1 if weather == 'sunny' else 0,
            'weather_cloudy': 1 if weather == 'cloudy' else 0,
            'weather_overcast': 1 if weather == 'overcast' else 0,
            'weather_humid': 1 if weather == 'humid' else 0,
            
            # Pitch
            'pitch_batting_paradise': 1 if pitch_type == 'batting_paradise' else 0,
            'pitch_batting_friendly': 1 if pitch_type == 'batting_friendly' else 0,
            'pitch_balanced': 1 if pitch_type == 'balanced' else 0,
            'pitch_bowling_friendly': 1 if pitch_type == 'bowling_friendly' else 0,
            'pitch_green_seamer': 1 if pitch_type == 'green_seamer' else 0,
            'pitch_spin_friendly': 1 if pitch_type == 'spin_friendly' else 0,
            
            # Target variable
            'team1_won': 1 if winner == team1 else 0
        }
        
        data.append(match_data)
    
    df = pd.DataFrame(data)
    return df

def save_training_data(filename='cricket_training_data.csv'):
    """Generate and save training data"""
    print("Generating training data...")
    df = generate_training_data(5000)
    df.to_csv(filename, index=False)
    print(f"Training data saved to {filename}")
    print(f"Total matches: {len(df)}")
    print(f"Team1 wins: {df['team1_won'].sum()} ({df['team1_won'].mean()*100:.1f}%)")
    print(f"Team2 wins: {len(df) - df['team1_won'].sum()} ({(1-df['team1_won'].mean())*100:.1f}%)")
    return df

if __name__ == '__main__':
    df = save_training_data()
    print("\nFirst few rows:")
    print(df.head())
    print("\nFeature columns:")
    print(df.columns.tolist())