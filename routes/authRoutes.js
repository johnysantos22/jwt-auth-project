/*const express = require('express');
const { register, login, protected } = require('../controllers/authController');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/protected', protected);


module.exports = router;*/

const express = require('express');
const { authController } = require('../controllers');

const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/protected', authController.protectedRoute);

module.exports = router;

