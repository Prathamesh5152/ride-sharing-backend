const router = require('express').Router();
const controller = require('../controller/cabController');

/**
 * @swagger
 * tags:
 *   name: Cabs
 *   description: Cab management APIs
 */

/**
 * @swagger
 * /api/cabs:
 *   get:
 *     summary: Get all cabs
 *     tags: [Cabs]
 *     responses:
 *       200:
 *         description: List of all cabs
 */
router.get('/', controller.getAllCabs);

/**
 * @swagger
 * /api/cabs/available:
 *   get:
 *     summary: Get available cabs
 *     tags: [Cabs]
 *     responses:
 *       200:
 *         description: Available cabs
 */
router.get('/available', controller.getAvailableCabs);

/**
 * @swagger
 * /api/cabs/{id}/passengers:
 *   get:
 *     summary: Get passengers in a cab
 *     tags: [Cabs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: List of passengers in cab
 */
router.get('/:id/passengers', controller.getCabPassengers);

module.exports = router;
