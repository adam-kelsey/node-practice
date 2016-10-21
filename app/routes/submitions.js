var express = require('express');
var router = express.Router();

router.get('/submitions', function(req, res) {

  res.render('submitions', {
    pageTitle: 'Submitions',
    pageID: 'submitions'
  });
});

module.exports = router;