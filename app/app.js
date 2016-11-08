var express = require('express');
var app = express();
var dataFile = require('./data/data.json');
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  port     : '3000',
  user     : 'adam',
  password : '',
  database : 'my_db'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});

connection.end();




app.set('port', process.env.PORT || 3000);
app.set('appData', dataFile);
app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.locals.siteTitle = 'The Alchemy of Artistry';

app.use(express.static('app/public'));
app.use(require('./routes/index'));
app.use(require('./routes/art'));
app.use(require('./routes/photography'));
app.use(require('./routes/api'));
app.use(require('./routes/submitions'));
app.use(require('./routes/login'));


var server = app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'));
});