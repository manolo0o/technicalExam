const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
    id_Producto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Articulo',
        required: true
    },
    cant_Producto: {
        type: Number,
        required: true
    },
    precio_Unitario: {
        type: Number,
        required: true
    },
    totalProd: {
        type: Number,
        required: true
    }
});

const facturaSchema = new mongoose.Schema({
    FT_Fecha: {
        type: Date,
        required: true
    },
    id_Cliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true
    },
    productos: [productoSchema],
    total: {
        type: Number,
        required: true
    }
}, { collection: 'factura' });

const Factura = mongoose.model('Factura', facturaSchema);

module.exports = Factura;