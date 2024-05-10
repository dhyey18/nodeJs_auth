const userService = require('../services/user')
const { setUser } = require('../utils/auth')
const { v4: uuidv4 } = require('uuid')

function handleUserSignUp(req, res) {
    const { name, email, password } = req.body
    userService.createUser(name, email, password)

    res.send({ msg: "user created" })
}

async function handleUserSignIn(req, res) {
    const { name, password } = req.body
    const user = await userService.getUserForSigin(name, password)
    const sessionId = uuidv4()
    setUser(sessionId, user)
    res.cookie('uid', sessionId)

    if (user.length > 0) {
        res.send({ msg: "User Login success" })
    } else {
        res.send({ msg: "Login fail" })
    }
}

module.exports = {
    handleUserSignUp,
    handleUserSignIn
}