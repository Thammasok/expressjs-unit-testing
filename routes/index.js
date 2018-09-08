const express = require('express')
const router = express.Router()

const { myLogger } = require('../middleware/logger')

/* GET home page. */
router.get('/', myLogger, function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
