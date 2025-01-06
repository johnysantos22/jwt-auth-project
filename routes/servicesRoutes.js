const express = require('express');
const { getServices, addService } = require('../controllers/servicesController');

const router = express.Router();

router.get('/getServices', getServices); // Rota para listar serviços
router.post('/addService', addService); // Rota para adicionar um serviço

module.exports = router;
