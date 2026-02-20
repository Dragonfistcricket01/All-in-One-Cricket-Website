CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	username VARCHAR(50) UNIQUE NOT NULL,
	email VARCHAR(100) UNIQUE NOT NULL,
	password VARCHAR(255) NOT NULL,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE polls (
	id SERIAL PRIMARY KEY,
	question TEXT NOT NULL,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE poll_options (
	id SERIAL PRIMARY KEY,
	poll_id INTEGER REFERENCES polls(id) ON DELETE CASCADE,
	option_text VARCHAR(200) NOT NULL,
	votes INTEGER DEFAULT 0
);

CREATE TABLE poll_votes (
	id SERIAL PRIMARY KEY,
	poll_id INTEGER REFERENCES polls(id) ON DELETE CASCADE,
	option_id INTEGER REFERENCES poll_options(id) ON DELETE CASCADE,
	user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
	voted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	UNIQUE(poll_id, user_id)
);

CREATE TABLE quiz_attempts (
	id SERIAL PRIMARY KEY,
	user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
	quiz_type VARCHAR(20) NOT NULL,
	score INTEGER NOT NULL,
	total_questions INTEGER NOT NULL,
	answers JSONB NOT NULL,
	completed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO polls (question) VALUES
	('Who is the greatest all-rounder of all time?'),
	('Which format of cricket do you enjoy most?'),
	('Pick your best fast bowler in modern cricket'),
	('Which T20 leagues is more exciting?'),
	('Who should be the next Bangladeshi dependable batsman?');

INSERT INTO poll_options (poll_id, option_text, votes) VALUES
	(1,'Shakib Al Hasan',0), (1,'Jacques Kallis',0), (1,'Garry Sobers',0), (1,'Ian Botham',0),
	(2,'Test Cricket',0), (2,'ODI (One Day International)',0), (2,'T20',0), (2,'The Hundred',0),
	(3,'Jasprit Bumrah',0), (3,'Kagiso Rabada',0), (3,'Mitchell Starc',0), (3,'Pat Cummins',0),
	(4,'BPL (Bangladesh Premier League)',0), (4,'PSL (Pakistan Super League)',0), (4,'BBL (Big Bash League)',0), (4,'The Hundred',0),
	(5,'Litton Das',0), (5,'Towhid Hridoy',0), (5,'Anamul Haque',0), (5,'Saif Hassan',0);
