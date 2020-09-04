var express = require('express');
var router = express.Router();

/* GET votar page */
router.get('/', function (req, res, next){
    res.render('seleccionarCandidato', { title: 'Elecciones'});
});

module.exports = router;