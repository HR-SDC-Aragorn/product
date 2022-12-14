const controller = require('./controllers');
let router = require('express').Router();

router.get('/products/', controller.products.getAll);

router.get('/products/:id', controller.products.get);

router.get('/products/:id/related', controller.related.get);

router.get('/products/:id/styles', controller.styles.get);

// router.get('/:styleid/skus', controller.skus.get);

// router.post('/reviews/meta', controller.cart.post);

module.exports = router;