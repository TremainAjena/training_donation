CREATE TABLE IF NOT EXISTS organizations (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR NOT NULL,
    email VARCHAR,
    phone VARCHAR,
    city VARCHAR,
    state VARCHAR
);