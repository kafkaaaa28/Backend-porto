const express = require('express');
const router = express.Router();
const comentscontroller = require('../controllers/comentscontroller.js');
const { AuthMiddleware } = require('../middlewares/authMiddleware.js');

router.post('/', comentscontroller.Createcoments);
router.get('/get', comentscontroller.Getcoment);
router.delete('/:id', AuthMiddleware, comentscontroller.Deletecoment);

module.exports = router;
