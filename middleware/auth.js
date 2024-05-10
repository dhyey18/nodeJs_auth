const { getUser } = require("../utils/auth");

async function restrictToLoginUserOnly(req, res, next) {

    const userId = req.cookies.uid;

    
    if (!userId) {
        return res.send({ msg: "Login failed" })
    }
    
    const user = getUser(userId)
    console.log(user,"dhyey");

    if (!user) {
        return res.send({ msg: "Login failed" })
    }

    req.user = user
    next()
}

module.exports = {
    restrictToLoginUserOnly
}