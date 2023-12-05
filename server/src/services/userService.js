let User = require('../models/User');
let jwt = require('jsonwebtoken');
let { SECRET } = require('../constants')

//SHOULD BE HASH!!!!!!!!!!!!
exports.register = ({ email, password }) => User.create({ email, password });

exports.login = async ({ email, password }) => {
    let user = await User.findOne({ email, password });

    if (user) {
        const payload = {
            _id: user._id, email: user.email
        };
        let token = jwt.sign(payload, SECRET, { expiresIn: "1d" });
        return { user, token };
    } else {
        throw new Error('No such user');
    }
};