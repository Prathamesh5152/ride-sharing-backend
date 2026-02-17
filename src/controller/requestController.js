const { RideRequest } = require('../models');
const { matchRide } = require('../services/matchingService');
const { calculatePrice } = require('../services/pricingService');
exports.createRequest = async (req, res) => {
  try {
    const request = await RideRequest.create({
      ...req.body,
      status: 'PENDING'
    });

    const cabId = await matchRide(request);

    // simple distance calc (dummy)
    const distance = Math.sqrt(
      Math.pow(req.body.destLat - req.body.originLat, 2) +
      Math.pow(req.body.destLng - req.body.originLng, 2)
    ) * 111; // approx km conversion

    const price = calculatePrice(
      distance,
      req.body.luggageUnits,
      req.body.seatCount
    );

    request.cabId = cabId;
    request.status = "MATCHED";
    await request.save();

    res.json({
      requestId: request.id,
      cabId,
      estimatedPrice: price.toFixed(2)
    });

  } catch (err) {
    console.error(err);
    res.status(500).send("Error creating request");
  }
};
exports.cancelRequest = async (req, res) => {
  await RideRequest.update(
    { status: 'CANCELLED' },
    { where: { id: req.params.id } }
  );

  res.json({ message: 'Cancelled' });
};
