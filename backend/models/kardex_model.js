const mongoose = require('mongoose');

const facturaKardexSchema = new mongoose.Schema({
    FK_CodProd: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Articulo',
        required: true
    },
    FK_CantProd: {
        type: Number,
        required: true
    },
    FK_Costo: {
        type: Number,
        required: true
    }
},{ collection: 'kardex' });

const FacturaKardex = mongoose.model('Kardex', facturaKardexSchema);

module.exports = FacturaKardex;