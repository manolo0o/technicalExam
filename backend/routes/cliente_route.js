const express = require('express');
const router = express.Router();

const { 
    getAllClients,
    getClientById,
    createClient 
  } = require('../controllers/cliente_controller.js');

// Get all clients
router.get('/', getAllClients);

// Get client by ID
router.get('/:id', getClientById);

// Create a new client
router.post('/', createClient);

module.exports = router;