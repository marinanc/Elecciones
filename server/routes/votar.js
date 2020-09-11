var express = require('express');
var router = express.Router();
var Votante = require('../models/votante');

/* GET votar page */
router.get('/', function (req, res, next){
    res.render('votar', { title: 'Elecciones'});
});

/* POST Ruteo para registrar un votante */
router.post('/', function(req, res, next){
    var votante = new Votante(
        {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            dni: req.body.dni,
            sexo: req.body.sexo
        }
    );
    var dniVotante = req.body.dni
    if(Votante.findOne({ dni: dniVotante }, function(err, response){
        if (err) {
            res.render('votar', { title: 'Elecciones', error: err.message });
        }
        if (response != null && response.estadoVoto == true) {
            res.render('votar', { title: 'Elecciones', error: 'Ya se ha votado con el DNI ingresado. ' });
        }
        else {
            if(response == null){
                votante.save(function (err, response) {
                    if (err) {
                        return res.render('votar', { title: 'Elecciones' , error: err.message});
                    }
                    if (response == null){
                        return res.render('votar', { title: Elecciones, error: "No se pudo registrar al votante..."})
                    }
                    res.redirect('seleccionarCandidato'); 
                });
            }
            else {
                res.redirect('seleccionarCandidato');
            }
        }
    }));
});

module.exports = router;