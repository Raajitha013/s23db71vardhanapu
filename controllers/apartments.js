var apartments = require('../models/apartments');
// List of all apartments
exports.apartments_list = function(req, res) {
res.send('NOT IMPLEMENTED: apartments list');
};
// for a specific apartments.
exports.apartments_detail = function(req, res) {
res.send('NOT IMPLEMENTED: apartments detail: ' + req.params.id);
};
// Handle apartments create on POST.
exports.apartments_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: apartments create POST');
};
// Handle apartments delete form on DELETE.
exports.apartments_delete = function(req, res) {
res.send('NOT IMPLEMENTED: apartments delete DELETE ' + req.params.id);
};
// Handle apartments update form on PUT.
exports.apartments_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: apartments update PUT' + req.params.id);
};