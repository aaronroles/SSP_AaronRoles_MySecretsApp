var express = require('express');
var router = express.Router();

var mySecrets = new Array();
var secretId = 0;

/* home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Log In' });
});

router.post('/', function(req, res, next) {
  res.render('index', { title: 'Log In' });
});

router.get('/index', function(req, res, next){
  res.render('index', { title: 'Log In' });
});

router.post('/index', function(req, res, next) {
  res.render('index', { title: 'Log In' });
});

/* secrets page */
router.post('/secrets', function(req, res, next){
    if(req.body.user == "aroles" && req.body.pass == "pass1"){
       res.render('secrets', { title: 'My Secrets App' });
    }
    else{
       res.render('invalid', {title: 'Invalid Login'});
    }
});

/* invalid page */
router.post('/invalid', function(req, res, next) {
  res.render('invalid', { title: 'Invalid' });
});

/* add a secret */
router.post('/addSecret', function(req, res, next){
  var secret = {};
  secret.id = secretId++;
  secret.info = req.body.theSecret;
  console.log(secret);
  mySecrets.push(secret);
  res.render('secrets', {
      mySecrets: mySecrets, 
      title: 'My Secrets App'});
});

module.exports = router;