const Product = require('../models/Product');

const findAll = async () => {
    return await Product.find().lean();
};

module.exports = {
    findAll
};
