const factory = require('./handlerFactory');
const Car = require('./../models/carModel');
// add my car

exports.setUserIds = (req, res, next) => {
  if (!req.body.customer) req.body.customer = req.user.id;
  next();
};
exports.addMyCar = factory.createOne(Car);
exports.updateMyCar = factory.updateOne(Car);

//get my car
