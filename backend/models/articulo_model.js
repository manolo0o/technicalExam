const mongoose = require('mongoose');

const articuloSchema = new mongoose.Schema({
    Ar_tCod: {
        type: Number,
        required: true
    },
    Art_Nom: {
        type: String,
        required: true
    },
    Art_Lab: {
        type: String,
        required: true
    },
    Art_Saldo: {
        type: Number,
        required: true
    },
    Art_Costo: {
        type: Number,
        required: true
    },
    Ar_tPV: {
        type: Number,
        required: true
    }
},{ collection: 'articulos' });

const Articulo = mongoose.model('Articulo', articuloSchema);

module.exports = Articulo;