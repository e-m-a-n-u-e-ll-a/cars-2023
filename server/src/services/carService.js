let Car = require('../models/Car');

exports.getAll = () => Car.find({});

exports.create = (carData) => Car.create(carData);

exports.getOne = (id) => Car.findById(id);

exports.update = (id, data) => Car.findByIdAndUpdate(id, { $push: { comments: data } });

exports.delete = (id) => Car.findByIdAndDelete(id);