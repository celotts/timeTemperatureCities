const express = require('express');
const router = express.Router();
const ForecastIo = require('forecastio');
const weather = new ForecastIo('a5e036bc49458c5f7bb593e87668f9a8');

const ciudadController = require('../controllers/ciudad.controller');

router.get('/ciudades', ciudadController.setCiudades);
module.exports = router;