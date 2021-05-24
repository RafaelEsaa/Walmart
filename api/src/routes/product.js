var express = require('express');
var router = express.Router();
const logger = require('morgan');
const { serializeError } = require('serialize-error');
const ProductController = require('../controller/productController')

router.get('/', async (req, res) => {
    const allProduct = await ProductController.findAll();
    try {
        res.send(allProduct)
    } catch (error) {
        logger(serializeError(error));
    }
});

module.exports = router;
