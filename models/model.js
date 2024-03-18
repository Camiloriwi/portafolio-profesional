
const mongoose = require('mongoose');
// const { type } = require('os');

const notaSchema = new mongoose.Schema({
    nombre:{type: String},
    usuario:{type: Number},
    nota1:{type: Number},
    nota2:{type: Number},
});

const Nota = mongoose.model('notas',notaSchema);

module.exports = Nota;










