command code to load data to PostgreSQL

\copy products(id, name, slogan, description, category, default_price) FROM 'data/product.csv' DELIMITER ',' CSV HEADER;

\copy features(id, product_id, feature, value) FROM 'data/features.csv' DELIMITER ',' CSV HEADER;

\copy styles(id, product_id, name, sale_price, original_price, default_style) FROM 'data/styles.csv' DELIMITER ',' CSV HEADER;

\copy photos(id, style_id, url, thumbnail_url) FROM 'data/photos.csv' DELIMITER ',' CSV HEADER;

\copy skus(id, style_id, size, quantity) FROM 'data/skus.csv' DELIMITER ',' CSV HEADER;

\copy related(id, product_id, related_product_id) FROM 'data/related.csv' DELIMITER ',' CSV HEADER;

-- to alter the data type in a table
-- ALTER TABLE styles ALTER COLUMN sale_price TYPE text USING sale_price::text;