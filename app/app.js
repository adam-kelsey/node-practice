var express = require('express');
var app = express();
var dataFile = require('./data/data.json');
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;
var sql = require('mssql');




passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));





sql.connect("mssql://username:password@localhost/database").then(function() {
    // Query

    new sql.Request().query('select * from mytable').then(function(recordset) {
        console.dir(recordset);
    }).catch(function(err) {
        // ... query error checks
    });

    // Stored Procedure

    new sql.Request()
    .input('input_parameter', sql.Int, value)
    .output('output_parameter', sql.VarChar(50))
    .execute('procedure_name').then(function(recordsets) {
        console.dir(recordsets);
    }).catch(function(err) {
        // ... execute error checks
    });

    // ES6 Tagged template literals (experimental)

    sql.query`select * from mytable where id = ${value}`.then(function(recordset) {
        console.dir(recordset);
    }).catch(function(err) {
        // ... query error checks
    });
}).catch(function(err) {
    // ... connect error checks
});




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

  
app.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

var server = app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'));
});