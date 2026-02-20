-- Create Doodle Cricket Scores Table
CREATE TABLE IF NOT EXISTS doodle_cricket_scores (
    id SERIAL PRIMARY KEY,
    player_name VARCHAR(50) NOT NULL,
    score INTEGER NOT NULL,
    balls INTEGER NOT NULL,
    difficulty VARCHAR(20) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create index for faster leaderboard queries
CREATE INDEX IF NOT EXISTS idx_doodle_scores_score ON doodle_cricket_scores(score DESC);
CREATE INDEX IF NOT EXISTS idx_doodle_scores_player ON doodle_cricket_scores(player_name);
CREATE INDEX IF NOT EXISTS idx_doodle_scores_difficulty ON doodle_cricket_scores(difficulty);