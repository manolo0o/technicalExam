const express = require('express');
const router = express.Router();

const {
    getAllFacturas,
    getFacturaById,
    createFactura
  } = require('../controllers/factura_controller');

// Get all facturas
router.get('/', getAllFacturas);

// Get factura by ID
router.get('/:id', getFacturaById);

// Create a new factura
router.post('/', createFactura);

module.exports = router;