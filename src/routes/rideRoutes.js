const router = require('express').Router();
const controller = require('../controller/rideController');

/**
 * @swagger
 * /api/rides/complete/{cabId}:
 *   post:
 *     summary: Complete a ride and make cab available again
 *     tags: [Rides]
 *     parameters:
 *       - in: path
 *         name: cabId
 *         required: true
 *         schema:
 *           type: integer
 *         description: Cab ID to complete ride
 *     responses:
 *       200:
 *         description: Ride completed successfully
 */
router.post('/complete/:cabId', controller.completeRide);

module.exports = router;
