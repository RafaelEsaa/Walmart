const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const product = new Schema({
    brand: {
        type: String
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    price: {
        type: Number
    }
});

module.exports = mongoose.model('product', product);
