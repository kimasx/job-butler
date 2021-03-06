'use strict';

var express = require('express');
var controller = require('./job.controller');
var auth = require('../../auth/auth.service');


var router = express.Router();

router.get('/', auth.isAuthenticated(), controller.index);
router.get('/sharedViews', auth.isAuthenticated(), controller.showSharedViews);
router.get('/:id', controller.show);
router.post('/create', auth.isAuthenticated(), controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', auth.isAuthenticated(), controller.destroy);

module.exports = router;