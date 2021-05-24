const config = {
    // MONGO_URL: process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/walmart',
    MONGO_URL: process.env.MONGO_URL || 'mongodb://mongo:27017/walmart',
    VERSION: 'v1'
};

module.exports = config;
