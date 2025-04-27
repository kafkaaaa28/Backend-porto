const express = require('express');
const router = express.Router();
const Authcontrollers = require('../controllers/authcontrollers.js');
const { AuthMiddleware } = require('../middlewares/authMiddleware.js');

router.post('/login', Authcontrollers.login);
router.post('/logout', Authcontrollers.logout);
router.get('/me', Authcontrollers.getME);

module.exports = router;
