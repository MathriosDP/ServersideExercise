var express               = require('express');
var projectsController   = require('../controllers/projectsController');

var router = express.Router();

router.get('/', projectsController.index);
router.get('/:projectId', projectsController.show);

module.exports = router;



