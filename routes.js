/**
 *  application routes main file
 */

'use strict';

module.exports = function (app) {
  app.use('/api/user', require('./apis/users'));
  app.use('/api/order', require('./apis/orders'));

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
    .get(function (req, res) {
      res.send({
        message: 'are you sure about this API'
      });
    });

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function (req, res) {
      res.send({
        message: 'you are successfully connected'
      });
    });
};