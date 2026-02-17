const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const RideRequest = sequelize.define('RideRequest', {
  passengerId: DataTypes.INTEGER,
  originLat: DataTypes.FLOAT,
  originLng: DataTypes.FLOAT,
  destLat: DataTypes.FLOAT,
  destLng: DataTypes.FLOAT,
  seatCount: DataTypes.INTEGER,
  luggageUnits: DataTypes.INTEGER,
  detourTolerance: DataTypes.FLOAT,
  status: DataTypes.STRING,
  cabId: DataTypes.INTEGER   // ⭐ IMPORTANT (stores which cab assigned)
});

module.exports = RideRequest;
