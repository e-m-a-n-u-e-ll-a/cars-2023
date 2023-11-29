let User = require('../models/User');
let jwt = require('jsonwebtoken');
let SECRET = require('../constants')

//SHOULD BE HASH!!!!!!!!!!!!
exports.register = ({ email, password }) => User.create({ email, password });

exports.login = async ({ email, password }) => {
    let user = await User.findOne({ email, password });

    if (user) {
        let token = jwt.sign({ _id: user._id, email: user.email }, 'mysupersecretsecret');
        return {user, token }
    } else {
        throw new Error('No such user')
    }
}