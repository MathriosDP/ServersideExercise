var express               = require('express');
var postsController       = require('../controllers/postsController');

var router = express.Router();

/* GET home page. */
router.get('/', postsController.index);
router.get('/home', postsController.index);
router.get('/post/:postId', postsController.show);

module.exports = router;
