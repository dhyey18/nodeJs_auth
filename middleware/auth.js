const { getUser } = require("../utils/auth");

async function restrictToLoginUserOnly(req, res, next) {

    const authHeader = req.headers['authorization'];
    
    if (!authHeader) {
        return res.send({ msg: "Login failed" })
    }

    const authToken = authHeader?.split("Bearer ")[1];

    const user = getUser(authToken)

    if (!user) {
        return res.send({ msg: "Login failed" })
    }

    req.user = user
    next()
}

module.exports = {
    restrictToLoginUserOnly
}