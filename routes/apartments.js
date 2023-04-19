var express = require('express');
var router = express.Router();

const apartments_controlers = require('../controllers/apartments');

/* GET costumes */

router.get('/', apartments_controlers.apartments_view_all_Page);

module.exports = router;
/* GET detail costume page */
router.get('/detail', apartments_controlers.apartments_view_one_Page);

/* GET create costume page */
router.get('/create', apartments_controlers.apartments_create_Page);
/* GET create update page */
router.get('/update', apartments_controlers.apartments_update_Page);
/* GET delete costume page */
router.get('/delete', apartments_controlers.apartments_delete_Page);


