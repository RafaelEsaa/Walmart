const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient
const path = require('path');
const cors = require('cors');
const createError = require('http-errors');
const config = require('./config');

require('./db');

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: '1mb' }));
app.use(bodyParser.urlencoded({ limit: '1mb', extended: true }));

app.use(express.static(path.join('./', 'public')));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, PATCH, DELETE'
    );
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-Requested-With,content-type'
    );
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// const publicRoutes = require('./routes/public');
const routes = require('./routes');

// app.use(publicRoutes);
app.use(`/${config.VERSION}`, routes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

app.listen(app.get('port'), () => 
    console.log(`App started on port ${app.get('port')}`)
)

// error handler
app.use(function (err, req, res, next) {
    // render the error page
    if (req.originalUrl.includes(config.VERSION)) {
        res.status(err.status || 500).send(err.message);
    } else {
        res.status(500).render('500');
    }
});

module.exports = app;
