CREATE DATABASE products;

CREATE TABLE products (
  id BIGSERIAL NOT NULL PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  slogan VARCHAR(500),
  description TEXT,
  category VARCHAR(50) NOT NULL,
  default_price INT NOT NULL
);

CREATE TABLE styles (
  id BIGSERIAL NOT NULL PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  sale_price INT,
  original_price INT NOT NULL,
  default_style BOOLEAN,
  product_id INT
);

CREATE TABLE features (
  id BIGSERIAL NOT NULL PRIMARY KEY,
  feature VARCHAR(150) NOT NULL,
  value VARCHAR(150),
  product_id INT
);

CREATE TABLE photos (
  id BIGSERIAL NOT NULL PRIMARY KEY,
  url text,
  thumbnail_url text,
  style_id INT
);

CREATE TABLE skus (
  id BIGSERIAL NOT NULL PRIMARY KEY,
  quantity INT,
  size VARCHAR(50)
  style_id INT
);