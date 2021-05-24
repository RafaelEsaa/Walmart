const Discount = require('../models/Discount');

const findAll = async () => {
    return await Discount.find().lean();
};

module.exports = {
    findAll
};
