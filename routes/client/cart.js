const express = require('express');
const router = express.Router();
const cartController = require('../../controllers/client/cart.controller');
const cartMiddleware = require('../../middleware/cart.middleware');

/* GET gio hang page. */
router.get('/gio-hang', cartController.cart);
router.post('/gio-hang',cartMiddleware.emtyCart, cartController.postCart);
router.put('/gio-hang/cap-nhat', cartController.update);
router.put('/gio-hang/xoa/all', cartController.deleteAll);
router.delete('/gio-hang/xoa/:idPro', cartController.deleteOne);

/* GET đặt hàng page. */
router.get('/dat-hang', cartController.order);
router.post('/dat-hang', cartController.postOrder);

module.exports = router;
