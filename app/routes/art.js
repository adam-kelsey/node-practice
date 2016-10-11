var express = require('express');
var router = express.Router();

router.get('/art', function(req, res) {
  var data = req.app.get('appData');

  res.render('art', {
    pageTitle: 'Art',
    pageID: 'art'
  });

});


module.exports = router;