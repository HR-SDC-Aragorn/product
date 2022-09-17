CREATE DATABASE products;

\c products;

CREATE TABLE products (
  id SERIAL NOT NULL PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  slogan VARCHAR(500),
  description TEXT,
  category VARCHAR(100) NOT NULL,
  default_price NUMERIC NOT NULL,
  related_product_id INT []
);

CREATE TABLE features (
  id SERIAL NOT NULL PRIMARY KEY,
  feature VARCHAR(150) NOT NULL,
  value VARCHAR(150),
  product_id INT REFERENCES products (id)
);

CREATE TABLE styles (
  style_id SERIAL NOT NULL PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  sale_price text,
  original_price NUMERIC NOT NULL,
  default_style BOOLEAN,
  product_id INT REFERENCES products (id)
);

CREATE TABLE photos (
  id SERIAL NOT NULL PRIMARY KEY,
  url text,
  thumbnail_url text,
  style_id INT REFERENCES styles (id)
);

CREATE TABLE skus (
  id SERIAL NOT NULL PRIMARY KEY,
  quantity INT,
  size VARCHAR(50),
  style_id INT REFERENCES styles (id)
);

CREATE TABLE related (
  id SERIAL NOT NULL PRIMARY KEY,
  related_product_id INT,
  product_id INT REFERENCES products (id)
)