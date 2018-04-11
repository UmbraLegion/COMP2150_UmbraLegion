var Genre = require("../models/genre");

// Home Page of app
exports.index = function(req, res) {
    res.send('NOT IMPLEMENTED: Site Home Page')
    
};

//Display list of genre
exports.genre_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre List.');
};

//Display genre by ID
exports.genre_detail = function(req, res) {
    res.send('NOT IMPLEMENTED:  Genre Detail: ' + req.params.id);
};

//Display genre creat form
exports.genre_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre create GET.');
};

exports.genre_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre create POST.');
};

//Display genre Delete (GET)
exports.genre_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre delete GET.');
};

//Display genre Delete (POST)
exports.genre_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre delete POST.');
};

//Display genre Update (GET)
exports.genre_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre update GET.');
};

//Display genre Update (POST)
exports.genre_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre update POST.');
};