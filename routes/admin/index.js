const express = require('express');
const router = express.Router();
const homeController = require('../../controllers/admin/home.controller');
const accountMiddleware = require('../../middleware/admin/account.middleware');

/* GET home page. */
router.get('/',accountMiddleware.requiredLogin, homeController.index);

module.exports = router;