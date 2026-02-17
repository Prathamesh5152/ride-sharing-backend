const router = require('express').Router();
const controller = require('../controller/requestController');

/**
 * @swagger
 * /api/requests:
 *   post:
 *     summary: Create a ride request
 *     tags: [Ride Requests]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               passengerId:
 *                 type: integer
 *               originLat:
 *                 type: number
 *               originLng:
 *                 type: number
 *               destLat:
 *                 type: number
 *               destLng:
 *                 type: number
 *               seatCount:
 *                 type: integer
 *               luggageUnits:
 *                 type: integer
 *               detourTolerance:
 *                 type: number
 *     responses:
 *       200:
 *         description: Ride request created
 */
router.post('/', controller.createRequest);

/**
 * @swagger
 * /api/requests/cancel/{id}:
 *   post:
 *     summary: Cancel a ride request
 *     tags: [Ride Requests]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Request cancelled
 */
router.post('/cancel/:id', controller.cancelRequest);

module.exports = router;
