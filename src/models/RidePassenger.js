const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const RidePassenger = sequelize.define('RidePassenger', {
  rideId: DataTypes.INTEGER,
  passengerId: DataTypes.INTEGER,
  pickupOrder: DataTypes.INTEGER,
  dropOrder: DataTypes.INTEGER,
});

module.exports = RidePassenger;
