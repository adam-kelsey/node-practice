var express = require('express');
var router = express.Router();

router.get('/submitions', function(req, res) {

  res.render('submitions', {
    pageTitle: 'Submitions',
    pageID: 'submitions'
  });
});

// Simple route middleware to ensure user is authenticated.
//function ensureAuthenticated(req, res, next) {
//  if (req.isAuthenticated()) { return next(); }
//  req.session.error = 'Please sign in!';
//  res.redirect('/signin');
//}  Temporary spot for middleware authentication code. Will move to appropriate spot when login is working properly

module.exports = router;