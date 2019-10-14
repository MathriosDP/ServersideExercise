var express               = require('express');
var opportunitysCotroller  = require('../controllers/opportunitysController');

var router = express.Router();

router.get('/', opportunitysCotroller.index)

module.exports = router;
