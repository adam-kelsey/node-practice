var express = require('express');
var router = express.Router();

router.get('/art', function(req, res) {
  var data = req.app.get('appData');
  var pageArt = [];

  data.artworklist.forEach(function(item) {
    pageArt = pageArt.concat(item.artwork);
  });

  res.render('art', {
    pageTitle: 'Art',
    artwork: pageArt,
    pageID: 'art'
  });

});


module.exports = router;