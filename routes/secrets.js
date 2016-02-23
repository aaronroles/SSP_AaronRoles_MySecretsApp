var express = require('express');
var router = express.Router();

/* GET secrets listing. */
router.get('/', function(req, res, next) {
  res.render('secrets', { title: 'My Secrets App' });
});

module.exports = router;
