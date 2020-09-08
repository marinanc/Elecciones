var mongoose = require('mongoose');

var VotanteSchema = new mongoose.Schema({
    nombre: {
        type: String,
        minlength: 2
    },
    apellido: {
        type: String,
        minlength: 2
    },
    dni: {
        type: String,
        minlength: 1
    },
    sexo: {
        type: String,
        enum: ["Femenino", "Masculino"]
    },
    estadoVoto: {
        type: Boolean,
        default: false
    }
});

var Votante = mongoose.model("Votante", VotanteSchema);
module.exports = Votante;