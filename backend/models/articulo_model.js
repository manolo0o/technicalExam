const mongoose = require('mongoose');

const articuloSchema = new mongoose.Schema({
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
    Art_PV: {
        type: Number,
        required: true
    }
},{ collection: 'articulos' });

const Articulo = mongoose.model('Articulo', articuloSchema);

module.exports = Articulo;