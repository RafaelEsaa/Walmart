const express = require('express');
const router = express.Router();
const logger = require('morgan');
const { serializeError } = require('serialize-error');
const DiscountController = require('../controller/discountController')

router.get('/', async (req, res) => {
    const allDiscount = await DiscountController.findAll();
    try {
        res.send(allDiscount)
    } catch (error) {
        logger(serializeError(error));
    }
});

module.exports = router;
