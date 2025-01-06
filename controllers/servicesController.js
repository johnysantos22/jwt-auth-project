const prisma = require('../prisma/client');

const getServices = async (req, res) => {
  try {
    const services = await prisma.service.findMany();
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar serviços." });
  }
};

module.exports = { getServices };
