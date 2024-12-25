const express = require('express');
const { register, login, protectedRoute } = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/protected', authMiddleware, (req, res) => {
  res.status(200).json({ message: 'Rota protegida acessada!', user: req.user });
});

module.exports = router;
