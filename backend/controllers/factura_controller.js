const Factura = require('../models/factura_model.js');

// Get all facturas
exports.getAllFacturas = async (req, res) => {
    try {
        const searchTerm = req.query.search;
        let facturas;
        if (searchTerm) {
            facturas = await Factura.find({
                $or: [
                    { _id: searchTerm },
                    { id_Cliente: { $regex: searchTerm, $options: 'i' } },
                    { id_Producto: { $regex: searchTerm, $options: 'i' } }
                ]
            }).populate('id_Cliente').populate('id_Producto');
        } else {
            facturas = await Factura.find().populate('id_Cliente').populate('id_Producto');
        }
        res.status(200).json(facturas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get factura by ID
exports.getFacturaById = async (req, res) => {
    try {
        const factura = await Factura.findById(req.params.id).populate('id_Cliente').populate('id_Producto');
        if (!factura) {
            return res.status(404).json({ message: 'Factura not found' });
        }
        res.status(200).json(factura);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new factura
exports.createFactura = async (req, res) => {
    const factura = new Factura({
        id_Cliente: req.body.id_Cliente,
        FT_Fecha: req.body.FT_Fecha,
        id_Producto: req.body.id_Producto
    });

    try {
        const newFactura = await factura.save();
        res.status(201).json(newFactura);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};