'use strict';

exports.get = function (req, res) {
    console.log('order management get method');
    
    res.send({message:'Order Management'});
}