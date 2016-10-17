var express = require('express');
var router = express.Router();

router.get('/photography', function(req, res) {
  var data = req.app.get('appData');
  var pageArt = [];
  var pageArtwork = data.artwork;

  data.artworklist.forEach(function(item) {
    pageArt = pageArt.concat(item.artwork);
  });

  res.render('photography', {
    pageTitle: 'Photography',
    artwork: pageArt,
    pageID: 'photography'
  });

});

// using the artwork as a temporary picture filler until photos have been added


module.exports = router;