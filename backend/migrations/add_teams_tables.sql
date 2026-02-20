-- Teams table
CREATE TABLE IF NOT EXISTS teams (
    id SERIAL PRIMARY KEY,
    user_id VARCHAR(255) NOT NULL,
    team_name VARCHAR(255) NOT NULL,
    formation_id INTEGER NOT NULL,
    formation_name VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Team players table (stores 11 players per team)
CREATE TABLE IF NOT EXISTS team_players (
    id SERIAL PRIMARY KEY,
    team_id INTEGER REFERENCES teams(id) ON DELETE CASCADE,
    player_id INTEGER NOT NULL,
    position INTEGER NOT NULL CHECK (position >= 0 AND position <= 10),
    player_name VARCHAR(255) NOT NULL,
    player_role VARCHAR(50) NOT NULL,
    player_country VARCHAR(100) NOT NULL,
    player_rating INTEGER NOT NULL,
    player_data JSONB NOT NULL,
    UNIQUE(team_id, position)
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_teams_user_id ON teams(user_id);
CREATE INDEX IF NOT EXISTS idx_team_players_team_id ON team_players(team_id);

-- Add constraint: each user can have max 11 teams
CREATE OR REPLACE FUNCTION check_user_team_limit()
RETURNS TRIGGER AS $$
BEGIN
    IF (SELECT COUNT(*) FROM teams WHERE user_id = NEW.user_id) >= 11 THEN
        RAISE EXCEPTION 'User cannot have more than 11 teams';
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER enforce_team_limit
    BEFORE INSERT ON teams
    FOR EACH ROW
    EXECUTE FUNCTION check_user_team_limit();