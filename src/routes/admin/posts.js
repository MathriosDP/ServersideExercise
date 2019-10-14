var express = require('express');
var postsController = require('../../controllers/admin/postsController');

var router = express.Router();

router.get('/', postsController.index);
router.get('/create', (req, res) => {
    res.render('admin/posts/create');
});
router.post('/create', postsController.store);

module.exports = router;
