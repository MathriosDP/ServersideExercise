var express = require('express');
var testimonialsController = require('../../controllers/admin/TestimonialsController');

var router = express.Router();

router.get('/', testimonialsController.index);
router.get('/create', (req, res) => {
    res.render('admin/testimonials/create');
});
router.post('/create', testimonialsController.store);

module.exports = router;
