var Author = require("../models/author");

//Display list of Authors
exports.author_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Author List.');
};

// Home Page of app
exports.index = function(req, res) {
    res.send('NOT IMPLEMENTED: Site Home Page')
    
};

//Display Author by ID
exports.author_detail = function(req, res) {
    res.send('NOT IMPLEMENTED:  Author Detail: ' + req.params.id);
};

//Display Author creat form
exports.author_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Author create GET.');
};

exports.author_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Author create POST.');
};

//Display Author Delete (GET)
exports.author_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Author delete GET.');
};

//Display Author Delete (POST)
exports.author_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Author delete POST.');
};

//Display Author Update (GET)
exports.author_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Author update GET.');
};

//Display Author Update (POST)
exports.author_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Author update POST.');
};