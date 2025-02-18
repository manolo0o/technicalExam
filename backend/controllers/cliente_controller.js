const Cliente = require('../models/cliente_model.js');

// Get all clients
exports.getAllClients = async (req, res) => {
    try {
        const clients = await Cliente.find();
        res.status(200).json(clients);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get client by ID
exports.getClientById = async (req, res) => {
    try {
        const client = await Cliente.findById(req.params.id);
        if (!client) {
            return res.status(404).json({ message: 'Client not found' });
        }
        res.status(200).json(client);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new client
exports.createClient = async (req, res) => {
    const client = new Cliente({
        Cl_Nombre: req.body.Cl_Nombre,
        Cl_Apellido: req.body.Cl_Apellido,
        Cl_Contacto: req.body.Cl_Contacto,
        Cl_Nit: req.body.Cl_Nit,
        Cl_Documento: req.body.Cl_Documento,
        Cl_Cupo: req.body.Cl_Cupo,
        Cl_Plazo: req.body.Cl_Plazo
    });

    try {
        const newClient = await client.save();
        res.status(201).json(newClient);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};