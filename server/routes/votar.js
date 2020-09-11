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
    if(Votante.find({ dni: dniVotante }, function(err, response){
        if (err) {
            res.render('votar', { title: 'Elecciones', error: err.message });
        }
        if (response != "") {
            res.render('votar', { title: 'Elecciones', error: 'Ya se ha votado con el DNI ingresado. ' + response});
        }
        else {
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
    }));
    // votante.save(function(err, response){
    //     if (err){
    //         return res.render('votar', { title: 'Elecciones' , error: err});
    //     }
    //     if (response == null){
    //         return res.render('votar', { title: Elecciones, error: "No se pudo registrar al votante..."})
    //     }
    //     res.redirect('/');
    // });
    
    // var filterDni = { dni: req.body.dni}
    // Votante.find(filterDni, function(err, votantes){
    //     if (err != null){
    //         res.status(400).send(new Error("Error: " + err.message));
    //     }
    //     if (votantes != null){
    //         res.status(400).send(new Error("Ya se ha votado con el número de DNI ingresado"));
    //     }
    //     else{
    //         votante.save(function (err, response){
    //             if(err){
    //                 return res.render('/', { title: 'Elecciones' });
    //             }
    //             if(response == null){
    //                 return res.render('/', { title: 'Elecciones', error: "No se pudo registrar sus datos..."});
    //             }
    //             res.redirect('/seleccionarCandidato');
    //         });
    //     }
    // });
});

module.exports = router;