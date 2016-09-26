var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send(`
    <h1>Welcome!</h1>
    <p>Veni Vidi Vici, ab origine ad tandem</p>
  `);
});


module.exports = router;