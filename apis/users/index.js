'use strict';
const express = require('express');
const controller = require('./users.controller');

const router = express.Router();

router.get('/', controller.get);
router.post('/', controller.post);

module.exports = router;