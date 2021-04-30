const express = require('express');
const router = express.Router();
const authController = require('../../controllers/admin/auth.controller');
const accountMiddleware = require('../../middleware/admin/account.middleware');

/* GET login page. */
router.get('/login', authController.login);

/* GET login page. */
router.post('/login',accountMiddleware.checkValidateFormLogin,accountMiddleware.checkAccountLogin, authController.postLogin);

//GET logout page
router.get('/logout',authController.logout);
module.exports = router;