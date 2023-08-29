const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// POST /api/users
router.post('/', usersCtrl.create);

// POST/API/USERS/LOGIN
  router.post('/login', usersCtrl.login)// GET /api/users/check-token
  router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);// check-token route


module.exports = router;