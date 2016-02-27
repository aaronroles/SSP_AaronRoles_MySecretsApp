var express = require('express');
var router = express.Router();

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
router.get('/invalid', function(req, res, next){
  res.render('invalid', { title: 'Invalid' });
});

router.post('/invalid', function(req, res, next) {
  res.render('invalid', { title: 'Invalid' });
});

module.exports = router;
