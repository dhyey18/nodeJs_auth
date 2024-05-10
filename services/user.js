const Users = require("../models/user")


async function createUser(name, email, password) {
    await Users.create({
        name,
        email,
        password
    })
}

async function getUserForSigin(name, password) {
    return await Users.find({
        name,
        password
    })
}


module.exports = {
    createUser,
    getUserForSigin
}