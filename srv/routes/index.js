var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.cookies['battleTag']) {
    res.json({'user': req.cookies})
  } else {
    res.json({'message': 'Not Logged In.'});
  }
});

module.exports = router;
