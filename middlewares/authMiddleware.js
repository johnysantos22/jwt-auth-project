const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env; // Certifique-se de que a chave secreta está no .env

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // Pega o token do cabeçalho Authorization

  if (!token) {
    return res.status(401).json({ message: 'Token não fornecido!' });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      // Erro na verificação do token
      return res.status(401).json({ message: 'Token inválido!', error: err.message });
    }

    req.user = decoded; // Se o token for válido, armazena os dados no req.user
    next(); // Passa para a próxima função/middleware
  });
};

module.exports = authMiddleware;
