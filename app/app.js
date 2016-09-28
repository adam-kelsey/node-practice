var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.locals.siteTitle = 'The Alchemy of Artistry';

app.use(require('./routes/index'));
app.use(require('./routes/art'));

var server = app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'));
});