const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Passenger = sequelize.define('Passenger', {
  name: DataTypes.STRING,
  rating: DataTypes.FLOAT,
});

module.exports = Passenger;
