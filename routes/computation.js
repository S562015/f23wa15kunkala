
var express = require('express');
var x = 0;
var router = express.Router();
/* GET users listing. */
router.get('/', function(req, res, next) {
    if(req.query.x == undefined){
        x = (Math.random(10));
      }else{
        x = req.query.x;
      }
      var abs = Math.cos(x);
      var acos = Math.asin(x);
      
      res.send(`cos applied to ${x} is ${abs}.<br> acos applied to ${x} is ${acos}.`);
});

module.exports = router;
