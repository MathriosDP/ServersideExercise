var express = require('express');
var SessionController = require('../../controllers/admin/postsController');

var router = express.Router();

router.post('/', SessionControler.store);

module.exports = router;
