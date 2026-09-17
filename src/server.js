require('dotenv').config();

const app = require('./app');
const connectDatabase = require('./config/database');

const port = process.env.PORT || 3000;

const startServer = async () => {
  await connectDatabase();
  app.listen(port, () => {
    console.log(`Servidor ejecutandose en http://localhost:${port}`);
  });
};

startServer().catch((error) => {
  console.error('No se pudo iniciar el servidor:', error.message);
  process.exit(1);
});