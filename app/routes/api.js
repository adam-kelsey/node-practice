var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var fs = require('fs');
var postingData = require('../data/postingdata.json');

router.get('/api', function(req, res) {
  res.json(postingData);
});

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false}));

router.post('/api', function(req, res) {
  postingData.unshift(req.body);
  fs.writeFile('app/data/postingdata.json', JSON.stringify(postingData), 'utf8', function(err) {
    if (err) {
      console.log(err);
    }
  });
  res.json(postingData);
});

module.exports = router;