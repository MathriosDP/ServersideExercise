var express = require('express');
var testimonialsSController = require('../controllers/testimonialsController');

var router = express.Router();

router.get('/', testimonialsSController.index);

module.exports = router;