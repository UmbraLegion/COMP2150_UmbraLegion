var book = require("../models/book");
var Author = require('../models/author');
var Genre = require('../models/genre');
var BookInstance = require('../models/bookinstance');
var async = require('async')


// Home Page of app
exports.index = function(rq, res) {
        async.parallel({
            book_count: function(callback) {
                book.count({}, callback);
            },
            bookinstance_count: function(callback) {
                BookInstance.count({}, callback);
            },
            bookinstance_available_count: function(callback) {
                BookInstance.count({status: 'Available'}, callback);
            },
            author_count: function(callback) {
                Author.count({}, callback);
            },
            genre_count: function(callback) {
                Genre.count({}, callback);    
            }
        }, function (err, result) {
            res.render('index',{title: 'Local Library Home', error :err, data: result});
        });
    }


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