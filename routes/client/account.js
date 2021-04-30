const express = require('express');
const router = express.Router();
const accountController = require('../../controllers/client/account.controller');
const accountMiddleware = require('../../middleware/account.middleware');

/* GET detail page */
router.get('/:tenDangNhap',accountController.login, accountController.detail);

/* GET login page. */
router.get('/', accountController.login);
router.get('/login', accountController.login);
router.post('/login', accountController.postLogin);

/* GET logout*/
router.get('/logout', accountController.logout);

/* GET register page. */
router.get('/register', accountController.register);
router.post('/register',accountMiddleware.checkExistAccount, accountController.postRegister);

module.exports = router;
