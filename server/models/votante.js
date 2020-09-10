var mongoose = require('mongoose');

var VotanteSchema = new mongoose.Schema({
    nombre: {
        type: String,
        minlength: 2,
        required: true
    },
    apellido: {
        type: String,
        minlength: 2,
        required: true
    },
    dni: {
        type: String,
        minlength: 7,
        maxlength: 8,
        unique: true,
        required: true
    },
    sexo: {
        type: String,
        enum: ["Femenino", "Masculino"],
        required: true
    },
    estadoVoto: {
        type: Boolean,
        default: false
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
});

var Votante = mongoose.model("Votante", VotanteSchema);
module.exports = Votante;