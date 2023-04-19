var apartments = require('../models/apartments');
// List of all apartments
exports.apartments_list = function (req, res) {
    res.send('NOT IMPLEMENTED: apartments list');
};
// for a specific Costume.
exports.apartments_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await apartments.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};
//Handle Costume update form on PUT.
exports.apartments_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await apartments.findById(req.params.id)
        // Do updates of properties
        if (req.body.apartment_location)
            toUpdate.apartment_location = req.body.apartment_location;
        if (req.body.apartment_size) toUpdate.apartment_size = req.body.apartment_size;
        if (req.body.apartment_rent) toUpdate.apartment_rent = req.body.apartment_rent;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
    }
};

// Handle apartments create on POST.
exports.apartments_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: apartments create POST');
};
// Handle Costume delete on DELETE.
exports.apartments_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await apartments.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
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

// Handle a show one view with id specified by query
exports.apartments_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await apartments.findById(req.query.id)
        res.render('apartmentsdetail',
            { title: 'apartments Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.apartments_create_Page = function(req, res) {
console.log("create view")
try{
res.render('apartmentscreate', { title: 'apartments Create'});
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};

// Handle building the view for updating a costume.
// query provides the id
exports.apartments_update_Page = async function(req, res) {
console.log("update view for item "+req.query.id)
try{
let result = await apartments.findById(req.query.id)
res.render('apartmentsupdate', { title: 'apartments Update', toShow: result });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};

// New code for delete SS9
// Handle a delete one view with id from query
exports.apartments_delete_Page = async function(req, res) {
console.log("Delete view for id " + req.query.id)
try{
result = await apartments.findById(req.query.id)
res.render('apartmentsdelete', { title: 'apartments Delete', toShow:
result });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};



// // for a specific apartments.
// exports.apartments_detail = function (req, res) {
//     res.send('NOT IMPLEMENTED: apartments detail: ' + req.params.id);
// };

// // Handle apartments update form on PUT.
// exports.apartments_update_put = function (req, res) {
//     res.send('NOT IMPLEMENTED: apartments update PUT' + req.params.id);
// };

// // Handle apartments delete form on DELETE.
// exports.apartments_delete = function (req, res) {
//     res.send('NOT IMPLEMENTED: apartments delete DELETE ' + req.params.id);
// };