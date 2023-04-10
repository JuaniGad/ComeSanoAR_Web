var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require('cors')
const dbConnect=require('./config/mongo')
const multer = require('multer');
require('dotenv').config()
dbConnect();
const bodyParser = require('body-parser');
const routes = require("./routes");


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const loginRouter=require('./routes/admin/login');
const controlRouter=require('./routes/admin/controlPanel');
const registerRouter=require('./routes/admin/register')
const apiRouter=require('./routes/admin/api')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public/images'));

const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

function secured(req, res, next) {
  // Verificar si el token se encuentra en una cookie
  const token = req.cookies.token;

  // Si el token no está presente, redirigir al usuario a la página de inicio de sesión
  if (!token) {
    return res.redirect('/admin/login');
  }

  try {
    // Verificar el token y extraer el payload
    const payload = jwt.verify(token, JWT_SECRET);

    // Agregar el objeto user a la solicitud para que esté disponible en las rutas protegidas
    req.user = payload.user;

    // Continuar con la solicitud
    next();
  } catch (error) {
    // Si el token no es válido, redirigir al usuario a la página de inicio de sesión
    return res.redirect('/admin/login');
  }
}

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/admin/login',loginRouter);
app.use('/admin/register',secured,registerRouter);
app.use('/admin/controlPanel',secured,controlRouter);
app.use('/api',cors(),apiRouter)

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  next();
});


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
