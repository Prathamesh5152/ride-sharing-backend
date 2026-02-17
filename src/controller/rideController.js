const { Cab, RideRequest } = require('../models');

exports.completeRide = async (req, res) => {
  const cabId = req.params.cabId;

  const cab = await Cab.findByPk(cabId);

  if (!cab) {
    return res.status(404).send("Cab not found");
  }

  // Reset cab seats
  cab.availableSeats = cab.capacity;
  cab.availableLuggage = cab.luggageCapacity;
  await cab.save();

  // Mark all requests of this cab as COMPLETED
  await RideRequest.update(
    { status: "COMPLETED" },
    { where: { cabId: cabId, status: "MATCHED" } }
  );

  res.send(`Ride completed. Cab ${cabId} is now available again.`);
};
