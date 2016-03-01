// Aaron Roles K00191549
// This app allows the user "aroles" to 
// login with the password "pass1". Once 
// logged in, the user can submit secrets 
// and sort the secrets by alphabet or date. 

var express = require('express');
var router = express.Router();

// Creating an array called mySecrets
// to hold a list of secrets.
var mySecrets = [];

// A global variable called secretId
// which will increment to give each
// new secret a unique ID.
var secretId = 0;

// Get or post the home page: 
// Handle all requests for / or /index
// by rendering index.jade 
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

// Post the secrets page:
// Handles data being submitted to
// secrets. This is triggered from
// index.jade when the submit button
// is clicked. 
router.post('/secrets', function(req, res, next){
    // If the user and pass sections
    // of the body are equal to aroles
    // and pass1.
    if(req.body.user == "aroles" && req.body.pass == "pass1"){
        // Render the secrets page as
        // the response.
        res.render('secrets', { mySecrets: mySecrets, title: 'My Secrets App' });
    }
    else{
        // Otherwise, render the invalid
        // login page as you used the 
        // wrong information.
        res.render('invalid', {title: 'Invalid Login'});
    }
});

// This is called when the Secrets form
// is submitted from secrets.jade. 
router.post('/addSecret', function(req, res, next){
    // Creating a secret object to
    // hold the secret properties.
    var secret = {};
    // Set secret.id equal to secretId,
    // and incrementing it for the next
    // time.
    secret.id = secretId++;
    // Setting secret.info equal to the
    // content of theSecret, a text field
    // on the jade page.
    secret.info = req.body.theSecret;
    // Setting secret.date equal to the
    // current date, making a timestamp.
    secret.date = new Date();
    // Pushing this secret object into
    // mySecrets array.
    mySecrets.push(secret);
    // Re-render the secrets page updated
    // with the new information inside 
    // the array.
    res.render('secrets', {
        mySecrets: mySecrets, 
        title: 'My Secrets App'});
});

// Removing a secret from the array and
// the page. Trigged by clicking the 
// delete hyperlink on secrets.jade
router.get('/deleteSecret/:id', function(req, res, next){
    // Loop through the information inside
    // the mySecrets array.
    for(i in mySecrets){
        // If the parameter(ID) from the request
        // matches an item in the array with the
        // same ID. 
        if(req.params.id == mySecrets[i].id){
            // Remove that item from the array.
            mySecrets.splice(i, 1);
        }
    }
    // Re-render the secrets page with the
    // deleted secret removed.
    res.render('secrets', {
      mySecrets: mySecrets, 
      title: 'My Secrets App'});
});

// Sort the listed secrets in ascending
// alphabetical order. Triggered by 
// clicking the Sort by A-Z button.
router.post('/sortByAlphabet', function(req, res, next){
    // Sort the array with a custom sorting
    // function. It takes 2 parameters (a,b).
    mySecrets.sort(function(a,b){
        // Set secretA equal to the info of
        // a secret in lower case.
        var secretA = a.info.toLowerCase();
        // Set secretB equal to the info of
        // a secret in lower case.
        var secretB = b.info.toLowerCase();
        // Testing whether one variable is 
        // "greater than", "less than" or
        // "equal" in order to arrange them
        // in the correct order.
        if(secretA < secretB) return -1;
        if(secretA > secretB) return 1;
        else return 0;
    });
    // Re-render the secrets page with the
    // updated order of secret information.  
    res.render('secrets', {
        mySecrets: mySecrets, 
        title: 'My Secrets App'});
});

// Sort the secrets by the date they 
// were created (newest to oldest).
// Triggered by clicking the "Sort
// by Date" button. 
router.post('/sortByDate', function(req, res, next){
    // Sort the array with a custom sorting
    // function. It takes 2 parameters (a,b).
    mySecrets.sort(function(a,b){
        // Set dateA equal to the date of
        // a secret.
        var dateA = new Date(a.date);
        // Set dateB equal to the date of
        // a secret.
        var dateB = new Date(b.date);
        // Return whether the first date is
        // "bigger" than the other one.
        return dateA - dateB;
    });
    // Re-render the secrets page with the
    // updated order of secret information.  
    res.render('secrets', {
        mySecrets: mySecrets, 
        title: 'My Secrets App'});
});

module.exports = router;