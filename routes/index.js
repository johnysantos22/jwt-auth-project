const express = require('express');

// Importar rotas
const authRoutes = require('./authRoutes');
const servicesRoutes = require('./servicesRoutes');
const scheduleRoutes = require('./scheduleRoutes');

// Criar um roteador principal
const router = express.Router();

router.use('/auth', authRoutes); // Rotas de autenticação
router.use('/services', servicesRoutes); // Rotas de serviços
router.use('/schedules', scheduleRoutes); // Rotas de agendamentos

module.exports = router;
