const Factura = require('../models/factura_model.js');
const Articulo = require('../models/articulo_model.js'); // Asegúrate de importar el modelo de Articulo

// Get all facturas or search facturas
exports.getAllFacturas = async (req, res) => {
    try {
        const searchTerm = req.query.search;
        let facturas;
        if (searchTerm) {
            // Check if the search term is a valid ObjectId
            const isObjectId = /^[0-9a-fA-F]{24}$/.test(searchTerm);
            if (isObjectId) {
                facturas = await Factura.find({
                    $or: [
                        { _id: searchTerm }
                    ]
                }).populate('id_Cliente').populate('productos.id_Producto');
            } else {
                facturas = await Factura.find({
                    $or: [
                        { FT_NumFactura: { $regex: searchTerm, $options: 'i' } },
                        { id_Cliente: { $regex: searchTerm, $options: 'i' } }
                    ]
                }).populate('id_Cliente').populate('productos.id_Producto');
            }
        } else {
            facturas = await Factura.find().populate('id_Cliente').populate('productos.id_Producto');
        }
        res.status(200).json(facturas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get factura by ID
exports.getFacturaById = async (req, res) => {
    try {
        const factura = await Factura.findById(req.params.id).populate('id_Cliente').populate('productos.id_Producto');
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
        FT_Fecha: req.body.FT_Fecha,
        id_Cliente: req.body.id_Cliente,
        productos: req.body.productos,
        total: req.body.total
    });

    try {
        const newFactura = await factura.save();

        // Actualizar el saldo de los artículos
        for (const producto of req.body.productos) {
            await Articulo.findByIdAndUpdate(producto.id_Producto, {
                $inc: { Art_Saldo: -producto.cant_Producto }
            });
        }

        res.status(201).json(newFactura);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};