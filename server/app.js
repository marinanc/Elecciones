var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const bluebird = require('bluebird');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var votarRouter = require('./routes/votar');
var estadisticasRouter = require('./routes/estadisticas');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Conexión con mongodb
mongoose.connect("mongodb://localhost:27017/elecciones", {
  promiseLibrary: bluebird,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var dbase = mongoose.connection;

dbase.on('open', function(){
  console.log("Conectado a mongodb...");
});

dbase.on('error', function(err){
  console.log("Error al conectarse con mongo: " + err.message);
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/votar', votarRouter);
app.use('/estadisticas', estadisticasRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
