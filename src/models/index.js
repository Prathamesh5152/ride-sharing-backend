const sequelize = require('../config/db');

const Passenger = require('./Passengers');
const Cab = require('./cab');
const Ride = require('./Ride');
const RideRequest = require('./RideRequest');
const RidePassenger = require('./RidePassenger');

sequelize.sync({ alter: true });


module.exports = {
  Passenger,
  Cab,
  Ride,
  RideRequest,
  RidePassenger,
};
