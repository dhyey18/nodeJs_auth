const jwt = require("jsonwebtoken")

const SECERET_KEY = "Dhyey@182001"

function setUser(user) {
    return jwt.sign({
        _id: user._id,
        name: user.name
    }, SECERET_KEY)
}

function getUser(token) {
    if (!token) {
        return null
    }
    try {
        return jwt.verify(token, SECERET_KEY)
    } catch (error) {
        return null
    }
}

module.exports = {
    setUser, getUser
}
