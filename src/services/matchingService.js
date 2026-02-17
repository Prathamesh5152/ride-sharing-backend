const { Cab } = require('../models');
const redis = require('../config/redis');

async function acquireLock(key) {
  return await redis.set(key, "locked", {
    NX: true,
    PX: 300   // 300 ms lock
  });
}

async function matchRide(request) {
  const cabs = await Cab.findAll({
    where: { status: 'ACTIVE' },
    order: [['id', 'ASC']]
  });

  for (let cab of cabs) {

    const lock = await acquireLock(`cab_${cab.id}`);
    if (!lock) continue;

    try {
      if (cab.availableSeats >= request.seatCount &&
          cab.availableLuggage >= request.luggageUnits) {

        cab.availableSeats -= request.seatCount;
        cab.availableLuggage -= request.luggageUnits;

        await cab.save();

        return cab.id;
      }
    } finally {
      await redis.del(`cab_${cab.id}`);
    }
  }

  // Create new cab
  const newCab = await Cab.create({
    capacity: 4,
    availableSeats: 4 - request.seatCount,
    luggageCapacity: 10,
    availableLuggage: 10 - request.luggageUnits,
    status: 'ACTIVE'
  });

  return newCab.id;
}

module.exports = { matchRide };
