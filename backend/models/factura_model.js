const mongoose = require('mongoose');

const facturaSchema = new mongoose.Schema({

    id_Cliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true
    },
    FT_Fecha: {
        type: Date,
        required: true
    },
    id_Producto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Articulo',
        required: true
    }
}, { collection: 'factura' });

const Factura = mongoose.model('Factura', facturaSchema);

module.exports = Factura;