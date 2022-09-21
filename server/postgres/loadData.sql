command code to load data to PostgreSQL

\copy products(id, name, slogan, description, category, default_price) FROM 'data/product.csv' DELIMITER ',' CSV HEADER;

\copy features(id, product_id, feature, value) FROM 'data/features.csv' DELIMITER ',' CSV HEADER;

\copy styles(id, product_id, name, sale_price, original_price, default_style) FROM 'data/styles.csv' DELIMITER ',' CSV HEADER;

\copy photos(id, style_id, url, thumbnail_url) FROM 'data/photos.csv' DELIMITER ',' CSV HEADER;

-- \copy skus(id, style_id, size, quantity) FROM 'data/skus.csv' DELIMITER ',' CSV HEADER;

-- \copy related(id, product_id, related_product_id) FROM 'data/related.csv' DELIMITER ',' CSV HEADER;

-- to alter the data type in a table
-- ALTER TABLE styles ALTER COLUMN sale_price TYPE text USING sale_price::text;

-- to add index to tables
-- CREATE INDEX idx_product_id ON products(id);
-- CREATE INDEX idx_style_id ON styles(style_id);
-- CREATE INDEX idx_style_product_id ON styles(product_id);
-- CREATE INDEX idx_photo_style_id ON photos(style_id);
-- CREATE INDEX idx_sku_style_id ON skus(style_id);
-- CREATE INDEX idx_related_product_id ON related(product_id);

-- update "null" to null
-- UPDATE styles SET sale_price = NULL WHERE sale_price = 'null'