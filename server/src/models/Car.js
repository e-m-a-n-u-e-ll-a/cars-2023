let mongoose = require('mongoose');

let carSchema = new mongoose.Schema({
    make: String,
    model: String,
    year: Number,
    description: String,
    price: Number,
    img: String,
    material: String,
    _ownerId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});

let Car = mongoose.model('Car', carSchema);
module.exports = Car