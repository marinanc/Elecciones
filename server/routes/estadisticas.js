var express = require('express');
var router = express.Router();
var Candidato = require('../models/candidato');

/* GET porcentaje de votos por candidato */
router.get('/', function(req, res, next){
    var totalVotos = 0
    Candidato.find({}, null, { sort:{ cantidadVotos:"desc" } }, function(err, candidatos){
        if(err != null){
            res.status(400).send(new Error("Error: " + err.message));
        }
        if(candidatos == null){
            res.status(404).send(new Error("No hay candidatos..."));
        }
        else {
            candidatos.forEach((item) => {
                totalVotos = totalVotos + parseFloat(item.cantidadVotos)
            });
        }
        res.render('estadisticas', { title: 'Elecciones', candidatos:candidatos, totalVotos: totalVotos });
    });
});

module.exports = router;