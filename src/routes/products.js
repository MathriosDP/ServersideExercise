var express = require('express');
var ProductsController = require('../controllers/ProductsController');

var router = express.Router();

router.get('/', ProductsController.index);

module.exports = router;
