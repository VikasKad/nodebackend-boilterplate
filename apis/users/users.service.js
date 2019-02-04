const userSchema = require('./../../models/users')

exports.getAllUsers = function (response) {
    userSchema.find({}, function (err, value) {
        if (err || (value == null)) {
            res.send({
                error: true,
                message: 'No watchlist Found'
            });
        } else {
            console.log('res sent');
            response({
                error: false,
                users: value
            });
        }

    });

}
exports.post = ((data, response) => {
    userSchema.create(data, function (err, output) {
        if (err) {
            console.log('error', err);
            response({
                error: true,
                message: err._message
            });
        } else {
            response({
                error: false,
                message: "User has been Created",
                data: output
            });
        }
    });
})