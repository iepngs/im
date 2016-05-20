var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//such as MVC - action
router.get('/kuka', function(req, res, next) {
  res.send('Hello Kuka');
});

module.exports = router;
