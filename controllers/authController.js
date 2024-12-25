const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { findUserByEmail, saveUser } = require('../models/user');

// Registro de usuários
const register = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (findUserByEmail(email)) {
      return res.status(400).json({ error: 'Usuário já registrado' });
    }

    // Criptografar a senha
    const hashedPassword = await bcrypt.hash(password, 10);
    saveUser({ email, password: hashedPassword });

    return res.status(201).json({ message: 'Usuário registrado com sucesso!' });
  } catch (err) {
    return res.status(500).json({ error: 'Erro ao registrar usuário' });
  }
};

// Login de usuários
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = findUserByEmail(email);

    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Senha incorreta' });
    }

    // Gerar o token JWT
    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    return res.status(200).json({ token });
  } catch (err) {
    return res.status(500).json({ error: 'Erro ao autenticar usuário' });
  }
};


// Rota protegida com token JWT
const protectedRoute = (req, res) => {
  return res.status(200).json({
    message: 'Acesso autorizado à rota protegida!',
    user: req.user, // Dados do usuário do token JWT
  });
};


module.exports = { register, login, protected: protectedRoute };

