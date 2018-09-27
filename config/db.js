require('dotenv').config()

var mongoose = require('mongoose');
mongoose.connect(process.env.DB_HOST+process.env.DB_NAME, {
    useNewUrlParser: true
});
exports.db = mongoose.connection;