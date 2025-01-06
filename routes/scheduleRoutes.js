const express = require('express');
const { createSchedule, getSchedules } = require('../controllers/scheduleController');

const router = express.Router();

router.post('/createSchedule', createSchedule); // Criar agendamento
router.get('/getSchedules', getSchedules); // Obter agendamentos

module.exports = router;
