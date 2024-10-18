const express = require('express');
const userController = require('../controllers/users.controllers');
const router = express.Router();

router.get('/:id', userController.getUser);
router.post('/', userController.createUser);
router.patch('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;