var express = require('express');
var router = express.Router();

/* GET secrets listing. */
router.get('/', function(req, res, next) {
  res.render('secrets', { title: 'My Secrets App' });
});

router.post('/index', function(req, res, next) {
  res.render('index', { title: 'Log In' });
  console.log("Going back");
});

module.exports = router;
