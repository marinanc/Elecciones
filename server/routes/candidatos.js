var express = require('express');
var router = express.Router();
var Candidato = require('../models/candidato');

/* GET votar page */
// router.get('/', function (req, res, next){
//     res.render('seleccionarCandidato', { title: 'Elecciones'});
// });

/* GET candidatos */
router.get('/', function(req, res, next){
    Candidato.find({}, function(err, candidatos){
        if(err != null){
            res.status(400).send(new Error("Error: " + err.message));
        }
        if(candidatos == null){
            res.status(404).send(new Error("No hay candidatos..."));
        }
        res.render('seleccionarCandidato', { title: 'Elecciones', candidatos:candidatos });
    });
});

module.exports = router;