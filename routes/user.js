var express = require('express');
var router = express.Router();
var User = require('../api/user');

/* post users listing. */
router.post('/register', User.userReg);
router.post('/login', User.userLogin);

module.exports = router;
