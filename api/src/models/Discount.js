const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const discount = new Schema({
    brand: {
        type: String
    },
    threshold: {
        type: Number
    },
    discount: {
        type: Number
    }
});

module.exports = mongoose.model('discount', discount);
