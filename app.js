// mongoose config
// require('./database');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var swig = require('swig');
var five  = require('johnny-five');
var board = new five.Board();

var routes = require('./routes/index');
var users = require('./routes/users');
var api = require('./routes/api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));

var swig = new swig.Swig();
app.engine('html', swig.renderFile);
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/api', api);

app.set('port', 8080);
app.listen(app.get('port'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

// render an HTML form to the end user
app.use('/api', api);

board.on("ready", function() {
  console.log('Board is ready !');
  myServo = new five.Servo(9);

  board.repl.inject({
    servo: myServo
  });

  
  myServo.sweep();

  this.wait(5000, function(){
    myServo.stop();
    myServo.center();
  });

});
module.exports = app;
