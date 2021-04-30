var express = require('express');
var router = express.Router();
var homeController = require('../../controllers/client/home.controller');

/* GET home page. */

router.get('/' ,homeController.index,);

router.get('/json', homeController.json);

module.exports = router;