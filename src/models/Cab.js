const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Cab = sequelize.define('Cab', {
  capacity: DataTypes.INTEGER,
  availableSeats: DataTypes.INTEGER,
  luggageCapacity: DataTypes.INTEGER,
  availableLuggage: DataTypes.INTEGER,
  status: DataTypes.STRING,
});

module.exports = Cab;
