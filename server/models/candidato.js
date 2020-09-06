var mongoose = require('mongoose');

var CandidatoSchema = new mongoose.Schema({
    numeroPartido: {
        type: Number,
        unique: true
    },
    nombrePartido: {
        type: String,
        minlength: 5,
        unique: true
    },
    nombreCandidato: {
        type: String,
        minlength: 5
    },
    imagenPartido: {
        type: String
    },
    cantidadVotos: {
        type: Number,
        min: 0
    }
});

var Candidato = mongoose.model("Candidato", CandidatoSchema);
module.exports = Candidato;