CREATE TABLE IF NOT EXISTS donations (
    id SERIAL PRIMARY KEY NOT NULL,
    user_id INTEGER,
    item_id INTEGER,
    qty_purchased INTEGER,
    created_at TIMESTAMP NOT NULL
);