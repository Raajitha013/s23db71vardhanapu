var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var apartments_controller = require('../controllers/apartments');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// apartments ROUTES ///
// POST request for creating a apartments.
router.post('/apartments', apartments_controller.apartments_create_post);
// DELETE request to delete Costume.
router.delete('/apartments/:id', apartments_controller.apartments_delete);
// PUT request to update Costume.
router.put('/apartments/:id', apartments_controller.apartments_update_put);
// GET request for one Costume.
router.get('/apartments/:id', apartments_controller.apartments_detail);
// GET request for list of all Costume items.
router.get('/apartments', apartments_controller.apartments_list);
module.exports = router;