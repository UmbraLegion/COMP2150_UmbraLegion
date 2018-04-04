var express = require('express');
var router = express.Router();

//Import all controller
var book_controller = require('../controllers/bookController');
var book_instance_controller = require('../controllers/bookInstanceController');
var author_controller = require('../controllers/authorController');
var genre_controller = require('../controllers/genreController');

// Get the Home Page
router.get('/', book_controller.index);

// BOOK ROUTES ******
router.get('/book/create', book_controller.book_create_get);
router.post('/book/create', book_controller.book_create_post);

router.get('/book/:id/delete', book_controller.book_delete_get);
router.post('/book/:id/delete', book_controller.book_delete_post);

router.get('/book/:id/update', book_controller.book_update_get);
router.post('/book/:id/update', book_controller.book_update_post);

router.get('/book/:id', book_controller.book_detail);
router.post('/books', book_controller.book_list);

//Author router ********

router.get('/author/create', author_controller.author_create_get);
router.post('/author/create', author_controller.author_create_post);

router.get('/author/:id/delete', author_controller.author_delete_get);
router.post('/author/:id/delete', author_controller.author_delete_post);

router.get('/author/:id/update', author_controller.author_update_get);
router.post('/author/:id/update', author_controller.author_update_post);

router.get('/author/:id', author_controller.author_detail);
router.post('/authors', author_controller.author_list);

//Genre Routes ******

router.get('/genre/create', genre_controller.genre_create_get);
router.post('/genre/create', genre_controller.genre_create_post);

router.get('/genre/:id/delete', genre_controller.genre_delete_get);
router.post('/genre/:id/delete', genre_controller.genre_delete_post);

router.get('/genre/:id/update', genre_controller.genre_update_get);
router.post('/genre/:id/update', genre_controller.genre_update_post);

router.get('/genre/:id', genre_controller.genre_detail);
router.post('/genres', genre_controller.genre_list);

// BokInstance Routes *****

router.get('/bookinstance/create', bookinstance_controller.bookinstance_create_get);
router.post('/bookinstance/create', bookinstance_controller.bookinstance_create_post);

router.get('/bookinstance/:id/delete', bookinstance_controller.bookinstance_delete_get);
router.post('/bookinstance/:id/delete', bookinstance_controller.bookinstance_delete_post);

router.get('/bookinstance/:id/update', bookinstance_controller.bookinstance_update_get);
router.post('/bookinstance/:id/update', bookinstance_controller.bookinstance_update_post);

router.get('/bookinstance/:id', bookinstance_controller.bookinstance_detail);
router.post('/bookinstances', bookinstance_controller.bookinstance_list);

module.exports = router;