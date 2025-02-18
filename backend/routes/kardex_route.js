const express = require('express');
const router = express.Router();
const {
  getAllFacturaKardex,
  getFacturaKardexById,
  createFacturaKardex
  } = require('../controllers/kardex_controller');

// Get all facturaKardex
router.get('/', getAllFacturaKardex);

// Get facturaKardex by ID
router.get('/:id', getFacturaKardexById);

// Create a new facturaKardex
router.post('/', createFacturaKardex);

module.exports = router;