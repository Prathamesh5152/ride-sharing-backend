const { Cab, RideRequest } = require('../models');

exports.getAllCabs = async (req, res) => {
  const cabs = await Cab.findAll();
  res.json(cabs);
};

exports.getAvailableCabs = async (req, res) => {
  const cabs = await Cab.findAll({
    where: { status: 'ACTIVE' }
  });
  res.json(cabs);
};

exports.getCabPassengers = async (req, res) => {
  const cabId = req.params.id;

  const passengers = await RideRequest.findAll({
    where: { cabId: cabId }
  });

  res.json(passengers);
};
