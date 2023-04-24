var express = require('express');
var router = express.Router();

const apartments_controlers = require('../controllers/apartments');

/* GET costumes */

router.get('/', apartments_controlers.apartments_view_all_Page);
router.get('/apartments/:id', apartments_controlers.apartments_detail);

// A little function to check if we have an authorized user and continue on or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
req.session.returnTo = req.originalUrl;
res.redirect("/login");
}



module.exports = router;
/* GET detail costume page */
router.get('/detail',secured, apartments_controlers.apartments_view_one_Page);

/* GET create costume page */
router.get('/create',secured, apartments_controlers.apartments_create_Page);
/* GET create update page */
router.get('/update',secured, apartments_controlers.apartments_update_Page);
/* GET delete costume page */
router.get('/delete',secured, apartments_controlers.apartments_delete_Page);



