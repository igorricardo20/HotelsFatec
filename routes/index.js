var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sheraton' });
});

/* GET Login page */
router.get('/login', function(req,res,next){
  res.render('login');
});

router.post('/login', function(req,res,next){
  var usuario = req.body.usuario;
  var senha = req.body.senha;

  if (usuario == "adm" && senha == "123"){
    res.redirect('/');
  }else{
    res.redirect('login');
  }
});

/*GET Reservas page */
router.get('/reservas', function(req,res,next){
  res.render('reservas');
});

/*GET Hóspedes page */
router.get('/hospedes', function(req,res,next){
  res.render('hospedes');
});

router.get('/novohospede', function(req,res,next){
  res.render('novohospede');
});

router.get('/novareserva', function(req,res,next){
  res.render('novareserva');
});
module.exports = router;
