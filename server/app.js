const express = require('express');
const router = express.Router();
const ForecastIo = require('forecastio');
const weather = new ForecastIo('a5e036bc49458c5f7bb593e87668f9a8');

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/latitud/:latitud/longitud/:longitud', (req, res, next) => {
    console.log(req.params.latitud, req.params.longitud);
    if (!req.params.latitud || !req.params.longitud) {
        res.status(404).json({
            msg: 'error'
        });
    }

    let latitud = parseInt(req.params.latitud, 10);
    let longitud = parseInt(req.params.longitud, 10);

    weather.forecast(latitud, longitud, (err, data) => {
        console.log(data);
        if (err) {
            next();
            return;
        }
        res.json({
            temperature: data.currently.temperature,
            timezone: data.timezone
        })
    });
});

module.exports = router;