const express = require('express');
const router = express.Router();
const productController = require('../../controllers/admin/product.controller');
const accountMiddleware = require('../../middleware/admin/account.middleware');
const permissionMiddleware = require('../../middleware/admin/permission.middleware');
/* GET create product page. */ 
router.get('/create-product',accountMiddleware.requiredLogin,permissionMiddleware(['1','4']), productController.createProduct);
router.post('/create-product',permissionMiddleware(['1','4']), productController.postCreateProduct);

/* GET edit product page. */ 
router.get('/edit/:slug',accountMiddleware.requiredLogin,permissionMiddleware(['1','4']), productController.editProduct);
router.put('/edit/:slug',permissionMiddleware(['1','4']), productController.putEditProduct);

/* GET delete product page. */ 
router.get('/delete/:slug',accountMiddleware.requiredLogin,permissionMiddleware(['1','4']), productController.deleteProduct);
router.delete('/delete/:slug',permissionMiddleware(['1','4']), productController.deleteDestroyProduct);

/* GET detail product page. */ 
router.get('/:slug',accountMiddleware.requiredLogin,permissionMiddleware(['1','4']), productController.detail);

/* GET product page. */ 
router.get('/',accountMiddleware.requiredLogin,permissionMiddleware(['1','4']), productController.index);

module.exports = router;