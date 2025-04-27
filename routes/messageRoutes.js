const express = require('express');
const router = express.Router();
const { AuthMiddleware } = require('../middlewares/authMiddleware.js');
const messagecontroller = require('../controllers/messagecontroller.js');

router.post('/', messagecontroller.createMessage);
router.get('/all', AuthMiddleware, messagecontroller.getAllMessage);
router.delete('/:id', AuthMiddleware, messagecontroller.deleteMessage);
module.exports = router;
