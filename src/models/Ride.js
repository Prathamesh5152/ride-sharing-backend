const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Ride = sequelize.define('Ride', {
  cabId: DataTypes.INTEGER,
  routeJson: DataTypes.JSON,
  status: DataTypes.STRING,
});

module.exports = Ride;
