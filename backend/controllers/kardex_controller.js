const FacturaKardex = require('../models/kardex_model.js');

// Get all facturaKardex
exports.getAllFacturaKardex = async (req, res) => {
    try {
        const facturaKardex = await FacturaKardex.find().populate('FK_CodProd');
        res.status(200).json(facturaKardex);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get facturaKardex by ID
exports.getFacturaKardexById = async (req, res) => {
    try {
        const facturaKardex = await FacturaKardex.findById(req.params.id).populate('FK_CodProd');
        if (!facturaKardex) {
            return res.status(404).json({ message: 'FacturaKardex not found' });
        }
        res.status(200).json(facturaKardex);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new facturaKardex
exports.createFacturaKardex = async (req, res) => {
    const facturaKardex = new FacturaKardex({
        FK_CodProd: req.body.FK_CodProd,
        FK_CantProd: req.body.FK_CantProd,
        FK_Costo: req.body.FK_Costo
    });

    try {
        const newFacturaKardex = await facturaKardex.save();
        res.status(201).json(newFacturaKardex);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};