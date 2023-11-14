let mongoose = require('mongoose');
let UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

let User = mongoose.model('User', UserSchema);
module.exports = User;