const express = require('express');

const dotenv = require('dotenv').config();
const router = require('./routes/rotas');


const app = express();
app.use('/api', router);
app.set('port', process.env.PORT || 3333);

module.exports = app;

