-- ================================================
-- Cricket Data Sync Tables
-- Run this SQL in your PostgreSQL database
-- ================================================

-- Team Rankings Table
CREATE TABLE IF NOT EXISTS team_rankings (
    id SERIAL PRIMARY KEY,
    format VARCHAR(10) NOT NULL, -- test, odi, t20
    team_name VARCHAR(100) NOT NULL,
    rank INTEGER NOT NULL,
    rating INTEGER,
    points INTEGER,
    matches INTEGER,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(format, team_name)
);

-- Player Rankings Table
CREATE TABLE IF NOT EXISTS player_rankings (
    id SERIAL PRIMARY KEY,
    format VARCHAR(10) NOT NULL, -- test, odi, t20
    category VARCHAR(50) NOT NULL, -- batsmen, bowlers, allrounders
    player_name VARCHAR(100) NOT NULL,
    country VARCHAR(50),
    rank INTEGER NOT NULL,
    rating INTEGER,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(format, category, player_name)
);

-- Live Matches Table
CREATE TABLE IF NOT EXISTS live_matches (
    id SERIAL PRIMARY KEY,
    match_id VARCHAR(50) UNIQUE NOT NULL,
    team1 VARCHAR(100),
    team2 VARCHAR(100),
    series VARCHAR(200),
    venue VARCHAR(200),
    status VARCHAR(50),
    current_score JSONB, -- Store as JSON for flexibility
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Recent Matches Table
CREATE TABLE IF NOT EXISTS recent_matches (
    id SERIAL PRIMARY KEY,
    match_id VARCHAR(50) UNIQUE NOT NULL,
    team1 VARCHAR(100),
    team2 VARCHAR(100),
    winner VARCHAR(100),
    series VARCHAR(200),
    venue VARCHAR(200),
    match_date DATE,
    match_result TEXT,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Upcoming Matches Table
CREATE TABLE IF NOT EXISTS upcoming_matches (
    id SERIAL PRIMARY KEY,
    match_id VARCHAR(50) UNIQUE NOT NULL,
    team1 VARCHAR(100),
    team2 VARCHAR(100),
    series VARCHAR(200),
    venue VARCHAR(200),
    match_date DATE,
    match_time TIME,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Player Statistics Table (NO foreign key to players)
CREATE TABLE IF NOT EXISTS player_stats (
    id SERIAL PRIMARY KEY,
    player_name VARCHAR(100) NOT NULL,
    player_country VARCHAR(50),
    cricbuzz_id VARCHAR(50),
    format VARCHAR(10), -- test, odi, t20
    runs INTEGER DEFAULT 0,
    wickets INTEGER DEFAULT 0,
    average DECIMAL(5,2) DEFAULT 0,
    strike_rate DECIMAL(5,2) DEFAULT 0,
    centuries INTEGER DEFAULT 0,
    half_centuries INTEGER DEFAULT 0,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(player_name, format)
);

-- Team Statistics Table
CREATE TABLE IF NOT EXISTS team_stats (
    id SERIAL PRIMARY KEY,
    team_name VARCHAR(100) NOT NULL,
    format VARCHAR(10), -- test, odi, t20
    matches_played INTEGER DEFAULT 0,
    matches_won INTEGER DEFAULT 0,
    matches_lost INTEGER DEFAULT 0,
    win_percentage DECIMAL(5,2) DEFAULT 0,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(team_name, format)
);

-- Cricket News Table
CREATE TABLE IF NOT EXISTS cricket_news (
    id SERIAL PRIMARY KEY,
    story_id VARCHAR(50) UNIQUE NOT NULL,
    headline TEXT NOT NULL,
    intro TEXT,
    publish_time BIGINT, -- Unix timestamp
    image_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Sync Log Table (Track sync operations)
CREATE TABLE IF NOT EXISTS sync_log (
    id SERIAL PRIMARY KEY,
    sync_type VARCHAR(50) NOT NULL, -- team_rankings, live_matches, etc.
    status VARCHAR(20) NOT NULL, -- success, failed
    message TEXT,
    synced_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for better performance
CREATE INDEX IF NOT EXISTS idx_team_rankings_format ON team_rankings(format);
CREATE INDEX IF NOT EXISTS idx_player_rankings_format_category ON player_rankings(format, category);
CREATE INDEX IF NOT EXISTS idx_live_matches_status ON live_matches(status);
CREATE INDEX IF NOT EXISTS idx_cricket_news_publish ON cricket_news(publish_time DESC);
CREATE INDEX IF NOT EXISTS idx_player_stats_format ON player_stats(format);
CREATE INDEX IF NOT EXISTS idx_team_stats_format ON team_stats(format);

-- Comments for documentation
COMMENT ON TABLE team_rankings IS 'ICC Team Rankings synced from RapidAPI';
COMMENT ON TABLE player_rankings IS 'ICC Player Rankings synced from RapidAPI';
COMMENT ON TABLE live_matches IS 'Currently live cricket matches';
COMMENT ON TABLE cricket_news IS 'Latest cricket news articles from Cricbuzz';
COMMENT ON TABLE player_stats IS 'Player statistics across all formats';
COMMENT ON TABLE team_stats IS 'Team statistics across all formats';
COMMENT ON TABLE sync_log IS 'Log of all data synchronization operations';

-- Success message
SELECT 'Cricket sync tables created successfully!' AS status;



-- Check all sync tables
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_name IN (
    'team_rankings',
    'player_rankings',
    'live_matches',
    'recent_matches',
    'upcoming_matches',
    'player_stats',
    'team_stats',
    'cricket_news',
    'sync_log'
)
ORDER BY table_name;

CREATE TABLE sync_log (
    id SERIAL PRIMARY KEY,
    sync_type VARCHAR(50) NOT NULL,
    status VARCHAR(20) NOT NULL,
    message TEXT,
    synced_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE sync_log ADD COLUMN records_synced INTEGER DEFAULT 0;


DROP TABLE IF EXISTS sync_log CASCADE;

CREATE TABLE sync_log (
    id SERIAL PRIMARY KEY,
    sync_type VARCHAR(50) NOT NULL,
    status VARCHAR(20) NOT NULL,
    records_synced INTEGER DEFAULT 0,
    error_message TEXT,
    message TEXT,
    synced_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_sync_log_type ON sync_log(sync_type);
CREATE INDEX idx_sync_log_status ON sync_log(status);