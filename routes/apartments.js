var express = require('express');
var router = express.Router();

const apartments_controlers = require('../controllers/apartments');

/* GET costumes */

router.get('/', apartments_controlers.apartments_view_all_Page);

module.exports = router;