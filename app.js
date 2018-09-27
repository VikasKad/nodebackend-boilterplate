var express = require('express');

var app = express();
//routing

require('./routes')(app);
require('./models/db');
// express config
require('./config/express')(app);


module.exports = app;