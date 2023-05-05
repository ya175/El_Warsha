const express = require('express');
const router = express.Router();
const customerController = require('./../controllers/customerController');
const authController = require('./../controllers/authController');
const factory = require('./../controllers/handlerFactory');

router.post('/signup', customerController.signupUser);
router.use(authController.protect);

module.exports = router;
