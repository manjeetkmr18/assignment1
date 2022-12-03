const User = require('../models/userModel')

function authMiddleware(req, res, next) {
    User.findById(req.session.userId, (error, user) => {
        if (error || !user)
            return res.redirect('/')
        next()
    })
}

function checkUserType(role) {
    return (req, res, next) => {
        if (req.session.userType !== role) {
            console.log(req.session.userType != role);
            res.status(401);
            return res.render('notfound')
        }
        next()
    }
}

module.exports = { authMiddleware, checkUserType };
