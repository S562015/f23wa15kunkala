var express = require('express');
var router = express.Router();

/* GET Nagarjuna's Data. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Nagarjuna Reddy, Kunkala' });
});

module.exports = router;
