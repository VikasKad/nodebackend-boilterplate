'use strict';
const express = require('express');
const controller = require('./orders.controller');

const router = express.Router();

router.get('/', controller.get)

module.exports = router;