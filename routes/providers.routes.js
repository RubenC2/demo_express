const express = require('express');
const router = express.Router();
const providersController = require('../controllers/providers.controller');

router.get('/', providersController.obtenerProviders);
router.get('/:id', providersController.obtenerProvider);
router.post('/', providersController.crearProvider);
router.put('/:id', providersController.actualizarProvider);
router.delete('/:id', providersController.eliminarProvider);

module.exports = router;