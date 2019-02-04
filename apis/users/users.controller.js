'use strict';
const usersService = require('./users.service')
const validator = require('validator');
const bcrypt = require('bcrypt');



exports.get = ((req, res) => {
    usersService.getAllUsers((returnData) => {
        res.send(returnData);
    })

})
exports.post = ((req, res) => {
    if ((validator.isEmail(req.body.email)) && (req.body.password !== "") && (req.body.password !== undefined)) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
            if (err) {
                console.log("cant has password");
                return res.json({
                    error: err,
                    message: "Unable to hash"
                });
            } else {
                usersService.post({
                    email: req.body.email,
                    password: hash
                }, (returnData) => {
                    res.send(returnData);
                })
            }
        })
    } else {
        res.send({
            send: false
        });
    }
})