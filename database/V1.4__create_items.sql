CREATE TABLE IF NOT EXISTS items (
    id SERIAL PRIMARY KEY NOT NULL,
    event_id INTEGER,
    name VARCHAR NOT NULL,
    wishlist_item BOOLEAN,
    qty_needed INTEGER,
    category_id INTEGER
);