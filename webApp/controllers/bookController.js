var book = require("../models/book");

// Home Page of app
exports.index = function(rq, res) {
    res.send('NOT IMPLEMENTED: Site Home Page')
};

//Display list of Books
exports.book_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Book List.');
};

//Display Book by ID
exports.book_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Book Detail: ' + req.params.id);
};

//Display Book creat form
exports.book_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Book create GET.');
};

exports.book_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Book create POST.');
};

//Display Book Delete (GET)
exports.book_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Book delete GET.');
};

//Display Book Delete (POST)
exports.book_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Book delete POST.');
};

//Display Book Update (GET)
exports.book_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Book update GET.');
};

//Display Book Update (POST)
exports.book_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Book update POST.');
};