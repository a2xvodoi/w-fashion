var express = require('express');
var router = express.Router();
var productController = require('../../controllers/client/product.controller');

router.get('/json/:listProducts', productController.listJson);

/* GET info product page. */
router.get('/:listProducts/:infoProduct', productController.info);

/* GET list product page. */
router.get('/:listProducts', productController.list);

module.exports = router;
