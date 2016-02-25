var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Log In' });
  console.log("HELLO 1");
});

router.get('/index', function(req, res, next){
  res.render('index', { title: 'Log In' });
  console.log("HELLO 2");
});

router.post('/secrets', function(req, res, next){
  res.render('secrets', { title: 'My Secrets App' });
  console.log("HELLO 3");
});

module.exports = router;
