const express = require('express');
const router = express.Router();

const ciudadController = require('../controllers/ciudad.controller');

router.get('/ciudades', ciudadController.setCiudades);
module.exports = router;