const express = require('express');
const cookieParser = require('cookie-parser');

const mainRoute = require('./routes/index');
const { connection } = require('./database');


let app = express()
const PORT = 8000

// connect to DB
connection()

// Middle ware
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

// Routes
app.use(mainRoute)

app.listen(PORT, () => console.log("listining on port : ", PORT))