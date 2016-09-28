var express = require('express');
var router = express.Router();

router.get('/art', function(req, res) {

  res.render('art', {
    pageTitle: 'Art',
    pageID: 'art'
  });

});


module.exports = router;