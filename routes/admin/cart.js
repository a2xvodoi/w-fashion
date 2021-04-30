const express = require('express');
const router = express.Router();
const cartController = require('../../controllers/admin/cart.controller');
const accountMiddleware = require('../../middleware/admin/account.middleware');
const permissionMiddleware = require('../../middleware/admin/permission.middleware');
//DELETE order page
router.delete('/delete/:maDH',permissionMiddleware(['1','2']), cartController.orderDestroy);

// GET order detail page
router.get('/:maDH',accountMiddleware.requiredLogin,permissionMiddleware(['1','2']), cartController.orderDetail);

/* GET cart page. */ 
router.get('/',accountMiddleware.requiredLogin,permissionMiddleware(['1','2']), cartController.index);

module.exports = router;