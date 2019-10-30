var express = require('express');
var ProductsController = require('../../controllers/admin/ProductsController');
const multer = require('multer');
const uploadConfig = require('../../config/upload');

var router = express.Router();

const upload = multer(uploadConfig);

router.get('/', ProductsController.index);
router.get('/create', function(req, res) { 
  res.render('admin/products/create');
});
router.post('/create', upload.single('thumbnail'), ProductsController.store);


module.exports = router;
