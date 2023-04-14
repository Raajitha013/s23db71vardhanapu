var apartments = require('../models/apartments');
// List of all apartments
exports.apartments_list = function (req, res) {
    res.send('NOT IMPLEMENTED: apartments list');
};
// for a specific apartments.
exports.apartments_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: apartments detail: ' + req.params.id);
};
// Handle apartments create on POST.
exports.apartments_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: apartments create POST');
};
// Handle apartments delete form on DELETE.
exports.apartments_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: apartments delete DELETE ' + req.params.id);
};
// Handle apartments update form on PUT.
exports.apartments_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: apartments update PUT' + req.params.id);
};

// List of all Costumes
exports.apartments_list = async function (req, res) {
    try {
        theapartments = await apartments.find();
        res.send(theapartments);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS
// Handle a show all view
exports.apartments_view_all_Page = async function (req, res) {
    try {
        theapartments = await apartments.find();
        res.render('apartments', { title: 'apartments Search Results', results: theapartments });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle Costume create on POST.
exports.apartments_create_post = async function (req, res) {
    console.log(req.body)
    let document = new apartments();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.apartment_location = req.body.apartment_location;
    document.apartment_size = req.body.apartment_size;
    document.apartment_rent = req.body.apartment_rent;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};



