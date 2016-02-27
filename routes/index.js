var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Log In' });
  console.log("HELLO 1");
});

router.post('/', function(req, res, next) {
  res.render('index', { title: 'Log In' });
  console.log("HELLO 1");
});

router.get('/index', function(req, res, next){
  res.render('index', { title: 'Log In' });
  console.log("HELLO 2");
});

router.post('/index', function(req, res, next) {
  res.render('index', { title: 'Log In' });
  console.log("Going back");
});

router.post('/secrets', function(req, res, next){
    if(req.body.user == "aroles" && req.body.pass == "pass1"){
       res.render('secrets', { title: 'My Secrets App' });
       console.log("Logged in as aroles");
    }
    else{
       res.render('invalid', {title: 'Invalid Login'});
       console.log('Invald login')
    }
});

router.get('/invalid', function(req, res, next){
  res.render('invalid', { title: 'Invalid' });
});

router.post('/invalid', function(req, res, next) {
  res.render('invalid', { title: 'Invalid' });
});

module.exports = router;
