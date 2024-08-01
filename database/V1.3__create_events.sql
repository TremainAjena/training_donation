CREATE TABLE IF NOT EXISTS events (
    id SERIAL PRIMARY KEY NOT NULL,
    organization_id INTEGER,
    name VARCHAR NOT NULL,
    start_date TIMESTAMP NOT NULL,
    end_date TIMESTAMP NOT NULL,
    location VARCHAR
);