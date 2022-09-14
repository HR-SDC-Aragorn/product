const mongoose = require("mongoose");
// mongoose.connect('mongodb://127.0.0.1/products');
mongoose.connect('mongodb://localhost/products');

const featureSchema = new mongoose.Schema ({
  id: { type: Number, unique: true },
  feature: String,
  value: String,
  product_id: Number // may not need this
});

let Feature = mongoose.model('Feature', featureSchema);

const productSchema = new mongoose.Schema ({
  id: { type: Number, unique: true },
  name: String,
  slogan: String,
  description: String,
  category: String,
  default_price: Number,
  features: [featureSchema]
});

let Product = mongoose.model('Product', productSchema);

const photoSchema = new mongoose.Schema ({
  id: { type: Number, unique: true },
  url: String,
  thumbnail_url: String,
  style_id: Number // may not need this
});

let Photo = mongoose.model('Photo', photoSchema);

const styleSchema = new mongoose.Schema ({
  id: { type: Number, unique: true },
  name: String,
  sale_price: Number,
  original_price: Number,
  default_style: Boolean,
  product_id: Number,
  photos: [photoSchema]
});

let Style = mongoose.model('Style', styleSchema);

const skuSchema = new mongoose.Schema ({
  id: { type: Number, unique: true },
  quantity: Number,
  size: String,
  style_id: Number
});

let Sku = mongoose.model('Sku', skuSchema);