var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let names = req.query && req.query.names && req.query.names.split(',') || [];
  const name = names[Math.floor(Math.random() * names.length)] || 'none provided';
  res.render('index', { name });
});

module.exports = router;
