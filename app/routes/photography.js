var express = require('express');
var router = express.Router();

router.get('/photography', function(req, res) {
  var data = req.app.get('appData');
  var pagePhoto = [];

  data.artworklist.forEach(function(item) {
    pagePhoto = pagePhoto.concat(item.photographs);
  });

  res.render('photography', {
    pageTitle: 'Photography',
    photographs: pagePhoto,
    pageID: 'photography'
  });

});

module.exports = router;