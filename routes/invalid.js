var express = require('express');
var router = express.Router();

/* GET invalid listing. */
router.get('/', function(req, res, next) {
  res.render('invalid', { title: 'Invalid login'});
});

router.post('/index', function(req, res, next) {
  res.render('index', { title: 'Log In' });
  console.log("Going back");
});

module.exports = router;
