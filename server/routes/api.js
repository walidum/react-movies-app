const express = require('express')
const {LOGIN} = require("../controllers/users.controller");
const {ALLUSERS} = require("../controllers/users.controller");
const router = express.Router()
const {
    HELLO, SEND_DATA, ADD_MOVIE, ALL_MOVIES,
    EDIT_MOVIE, DELETE_MOVIE
} = require("../controllers/movies.controller");
const {REGISTER} = require("../controllers/users.controller");


router.get('/hello', HELLO)
router.post('/send', SEND_DATA)
router.post('/add', ADD_MOVIE)
router.get('/all', ALL_MOVIES)
router.put('/edit', EDIT_MOVIE)
router.post('/delete', DELETE_MOVIE)

router.post('/register', REGISTER)
router.post('/login', LOGIN)
router.get('/allusers', ALLUSERS)
module.exports = router;
