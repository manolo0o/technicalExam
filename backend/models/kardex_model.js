const mongoose = require('mongoose');

const facturaKardexSchema = new mongoose.Schema({
    FK_Fecha_Ingreso: {
        type: Date,
        required:true
    },
    FK_Nom: {
        type: String,
        required: true
    },
    FK_Lab: {
        type: String,
        required: true
    },
    FK_Saldo: {
        type: Number,
        required: true
    },
    FK_Costo: {
        type: Number,
        required: true
    },
    FK_PV: {
        type: Number,
        required: true
    }
},{ collection: 'kardex' });

const FacturaKardex = mongoose.model('Kardex', facturaKardexSchema);

module.exports = FacturaKardex;