var express = require('express');
var router = express.Router();

router.use('/product', require('./product'));
router.use('/discount', require('./discount'));

module.exports = router;
