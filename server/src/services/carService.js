let Car = require('../models/Car');

exports.getAll = () => Car.find({});

exports.create = (carData) => Car.create(carData);

exports.getOne = (id) => Car.findById(id);

exports.update = (id, carData) => Car.findByIdAndUpdate(id, carData);

exports.delete = (id) => Car.findByIdAndDelete(id);