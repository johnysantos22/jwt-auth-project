const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');

const app = express();

// Configurar CORS
app.use(cors()); // Permite requisições de qualquer origem. Para especificar origens, veja abaixo.
app.use(express.json()); // Para trabalhar com JSON no corpo das requisições
app.use('/api', authRoutes); 

// Middleware
app.use(bodyParser.json());

// Rotas
app.use('/auth', authRoutes);

// Iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
