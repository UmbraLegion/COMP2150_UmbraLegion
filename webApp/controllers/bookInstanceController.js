var Bookinsctance = require("../models/bookinstance");

// Home Page of app
exports.index = function(req, res) {
    res.send('NOT IMPLEMENTED: Site Home Page')
    
};

//Display list of Books
exports.bookinstance_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Bookinstance List.');
};

//Display bookinstance by ID
exports.bookinstance_detail = function(req, res) {
    res.send('NOT IMPLEMENTED:  Bookinstance Detail: ' + req.params.id);
};

//Display bookinstance creat form
exports.bookinstance_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Bookinstance create GET.');
};

exports.bookinstance_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Bookinstance create POST.');
};

//Display Bookinstance Delete (GET)
exports.bookinstance_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Bookinstance delete GET.');
};

//Display Bookinstance Delete (POST)
exports.bookinstance_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Bookinstance delete POST.');
};

//Display Bookinstance Update (GET)
exports.bookinstance_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Bookinstance update GET.');
};

//Display Bookinstance Update (POST)
exports.bookinstance_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Bookinstance update POST.');
};