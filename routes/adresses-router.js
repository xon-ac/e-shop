const express = require('express');
const addressController = require('../controllers/adresses.controllers');
const router = express.Router();

router.get('/', addressController.getAllAddresses);
router.get('/:id', addressController.getAddress);
router.post('/', addressController.createAddress);
router.patch('/:id', addressController.updateAddress);
router.delete('/:id', addressController.deleteAddress);

module.exports = router;