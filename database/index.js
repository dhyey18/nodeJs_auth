const mongoose = require('mongoose');
const DB_URL = "mongodb://localhost:27017/authDemo"

mongoose.set("strictQuery", true);

function connection() {
    mongoose.connect(DB_URL).then(() => {
        console.log("DB is connected");
    })
}

module.exports = {
    connection
}