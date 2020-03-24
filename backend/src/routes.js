const express = require('express');

const ongController = require('./controllers/OngController');
const incidentController = require('./controllers/IncidentController');
const profileController = require('./controllers/ProfileController');
const sessionController = require('./controllers/SessionController');

const Route = express.Router();

Route.post('/login', sessionController.create);

Route.get('/ongs', ongController.list);
Route.post('/ongs', ongController.create);

Route.get('/profile', profileController.list);

Route.get('/incidents', incidentController.list);
Route.post('/incidents', incidentController.create);
Route.delete('/incidents/:id', incidentController.delete);

module.exports = Route;
