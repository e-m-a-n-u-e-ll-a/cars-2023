let mongoose = require('mongoose');

let carSchema = new mongoose.Schema({
    model: String,
    img: String,
    description: String,
    price: Number,
    year: Number,
    mileage: String,
    comments: [{
        type: mongoose.Types.ObjectId,
        ref: 'Comment'
    }],
    _ownerId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});

let Car = mongoose.model('Car', carSchema);
module.exports = Car