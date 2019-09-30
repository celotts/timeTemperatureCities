const Ciudad = require('../model/ciudad');
var redis = require('redis');

//creamos un cliente
var redisCiudad = redis.createClient();

var ciudad = [];
const ciudadController = {};
ciudad.push(new Ciudad('CL', 'Santiago', -70.6482700, -33.4569400));
ciudad.push(new Ciudad('CH', 'Zurich', 8.5500000, 47.3666700));
ciudad.push(new Ciudad('NZ', 'Auckland', 174.7833300, -36.8500000));
ciudad.push(new Ciudad('AU', 'Sydney', 141.7022200, -13.4183300));
ciudad.push(new Ciudad('UK', 'Londres', -0.118092, 51.509865));
ciudad.push(new Ciudad('USA', 'Georgia', -83.5001800, 32.7504200));

ciudadController.setCiudades = async (req, res, next) => {
    ciudad.forEach(element => {
        redisCiudad.hmset(element.codigoCiudad, { ['nombreCiudad']: element.nombreCiudad, ['latitud']: element.latitud, ['longitud']: element.longitud })
    });
    redisCiudad.hgetall('codigoCiudad', function (err, object) {
        return res.json(object);
    });
    return res.json(ciudad);
}

module.exports = ciudadController;