let jwt = require('jsonwebtoken');
let SECRET = require('../constants');
exports.auth = function (req, res, next) {
    let token = req.headers['X-Authorization']; 
    
    if (token) {
        try {
            let decodedToken = jwt.verify(token, SECRET);
            if (decodedToken) {
                req.user = decodedToken;
                next();
            } else {
                res.status(401).json('You are not authorized!');
            }
        } catch (error) {
            console.error('Token Verification Failed:', error.message);
            res.status(401).json('Token verification failed');
        }
    } else {
        next();
    }
};
exports.isAuth = function (req, res, next) {
    if (req.user) {
        next();
    } else {
        res.status(401).json({ message: 'you are not authorized' })
    }
}