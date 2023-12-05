let mongoose = require('mongoose');

let commentSchema = new mongoose.Schema({
    email: String,
    text: String,
    carId: String
});

let Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment