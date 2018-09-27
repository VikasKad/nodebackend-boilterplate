'use strict';
const usersSchema = require('./../../models/users')
exports.get = function (req, res) {
    res.send('respond with a resource');
    var newwallet = new usersSchema({
       email:'vikas',
       password:'test'
    });
    newwallet.save(function (err, output) {
        if (err) {
            res.send({
                error: true,
                message: "Database Issue"
            });
            console.log(err);
            // res.send('res, commfun.ERR_MSG_CREATE');
        } else {
            res.send({
                error: false,
                message: "Record has been updated",
                data: {
                    index: index,
                    publickey: address,
                    privatekey: privateKey
                }
            });
            // commfun.Errlog(res, commfun.SUCCESS_MSG_CREATE);
        }
    });

}