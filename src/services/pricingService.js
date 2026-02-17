function calculatePrice(distance, luggageUnits, seatCount) {
  const baseFare = 100;
  const perKmRate = 10;
  const luggageCharge = 20 * luggageUnits;
  const seatCharge = 30 * seatCount;

  return baseFare + (distance * perKmRate) + luggageCharge + seatCharge;
}

module.exports = { calculatePrice };
