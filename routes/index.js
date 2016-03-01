var express = require('express');
var router = express.Router();

var mySecrets = [];
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
       res.render('secrets', { mySecrets: mySecrets, title: 'My Secrets App' });
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
  secret.date = new Date();
  mySecrets.push(secret);
  
  res.render('secrets', {
      mySecrets: mySecrets, 
      title: 'My Secrets App'});
});

/* remove a secret */
router.get('/deleteSecret/:id', function(req, res, next){
    for(i in mySecrets){
        if(req.params.id == mySecrets[i].id){
            mySecrets.splice(i, 1);
        }
    }
    
    res.render('secrets', {
      mySecrets: mySecrets, 
      title: 'My Secrets App'});
});

/* sort secrets (alphabet, date) */
router.post('/sortByAlphabet', function(req, res, next){
        mySecrets.sort(function(a,b){
            var secretA = a.info.toLowerCase();
            var secretB = b.info.toLowerCase();
            if(secretA < secretB) return -1;
            if(secretA > secretB) return 1;
            else return 0;
        });
        
        res.render('secrets', {
            mySecrets: mySecrets, 
            title: 'My Secrets App'});
});

router.post('/sortByDate', function(req, res, next){
        mySecrets.sort(function(a,b){
            var dateA = new Date(a.date);
            var dateB = new Date(b.date);
            return dateA - dateB;
        });
        
        res.render('secrets', {
            mySecrets: mySecrets, 
            title: 'My Secrets App'});
});

module.exports = router;