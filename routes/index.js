const express = require('express');
const multer = require('multer')

const userRoute = require('./user');
const { restrictToLoginUserOnly } = require('../middleware/auth');

let router = express.Router()

router.use('/user', userRoute);

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        return cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        return cb(null, uniqueSuffix + " - " +file.fieldname)
    }
})

const upload = multer({ storage })

router.post('/profile', upload.single('profileImage'), (req, res) => {
    console.log(req.body);
    console.log(req.file);
})

router.get('/dhyey', restrictToLoginUserOnly, (req, res) => {
    res.send("Welcome to base route")
})

module.exports = router;

