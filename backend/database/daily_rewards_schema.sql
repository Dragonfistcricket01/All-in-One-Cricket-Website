-- ============================================
-- DAILY REWARDS DATABASE SCHEMA
-- ============================================

-- Table 1: User Rewards (track streaks and coins)
CREATE TABLE IF NOT EXISTS user_rewards (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    current_streak INTEGER DEFAULT 0,
    longest_streak INTEGER DEFAULT 0,
    total_coins INTEGER DEFAULT 0,
    last_claim_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id)
);

-- Table 2: Claim History (record each claim)
CREATE TABLE IF NOT EXISTS reward_claims (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    claim_date DATE NOT NULL,
    day_number INTEGER NOT NULL,
    reward_type VARCHAR(50) NOT NULL,
    reward_amount INTEGER NOT NULL,
    streak_at_claim INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table 3: User Badges (collectible achievements)
CREATE TABLE IF NOT EXISTS user_badges (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    badge_id VARCHAR(50) NOT NULL,
    badge_name VARCHAR(100) NOT NULL,
    badge_emoji VARCHAR(10),
    earned_date DATE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_user_rewards_user_id ON user_rewards(user_id);
CREATE INDEX IF NOT EXISTS idx_reward_claims_user_id ON reward_claims(user_id);
CREATE INDEX IF NOT EXISTS idx_reward_claims_date ON reward_claims(claim_date DESC);
CREATE INDEX IF NOT EXISTS idx_user_badges_user_id ON user_badges(user_id);

-- Function to update timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger to auto-update updated_at
DROP TRIGGER IF EXISTS update_user_rewards_updated_at ON user_rewards;
CREATE TRIGGER update_user_rewards_updated_at
    BEFORE UPDATE ON user_rewards
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();



SELECT * FROM user_rewards;
SELECT * FROM reward_claims;
SELECT * FROM user_badges;

-- Reset to test again
UPDATE user_rewards SET last_claim_date = CURRENT_DATE - 1 WHERE user_id = 1;

SELECT * FROM users;

INSERT INTO users (username, email, password) 
VALUES ('testuser', 'test@example.com', 'password123')
RETURNING id;

-- View your reward status
SELECT * FROM user_rewards WHERE user_id = 1;

-- View all your claims
SELECT * FROM reward_claims WHERE user_id = 1 ORDER BY claim_date DESC;

-- View any badges earned
SELECT * FROM user_badges WHERE user_id = 1;

-- Check user_rewards table
SELECT * FROM user_rewards WHERE user_id = 1;

-- Check reward_claims table
SELECT * FROM reward_claims WHERE user_id = 1 ORDER BY claim_date DESC LIMIT 1;

SELECT user_id, current_streak, longest_streak, total_coins, last_claim_date, updated_at 
FROM user_rewards 
WHERE user_id = 1;

--If user_rewards.last_claim_date is still yesterday, manually update it:
UPDATE user_rewards 
SET last_claim_date = '2025-11-11',
    current_streak = 1,
    updated_at = CURRENT_TIMESTAMP
WHERE user_id = 1;

--Delete today's claim from database:
DELETE FROM reward_claims 
   WHERE user_id = 1 AND DATE(claim_date) = '2025-11-11';
   
   DELETE FROM user_rewards WHERE user_id = 1;


SELECT * FROM user_rewards WHERE user_id = 1;
SELECT * FROM reward_claims WHERE user_id = 1 ORDER BY claim_date DESC LIMIT 5;
