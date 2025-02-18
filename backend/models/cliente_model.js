const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
    Cl_Nombre: {
        type: String,
        required: true
    },
    Cl_Apellido: {
        type: String,
        required: true
    },
    Cl_Contacto: {
        type: String,
        required: true
    },
    Cl_Nit: {
        type: String,
        required: true
    },
    Cl_Documento: {
        type: String,
        required: true
    },
    Cl_Cupo: {
        type: Number,
        required: true
    },
    Cl_Plazo: {
        type: Number,
        required: true
    }
},{ collection: 'clientes' });

const Cliente = mongoose.model('Cliente', clienteSchema);

module.exports = Cliente;