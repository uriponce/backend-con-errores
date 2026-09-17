const mongoose = require('mongoose');

const connectDatabase = async () => {
  const mongoUri = process.env.MONGODB_URI;

  if (!mongoUri) {
    throw new Error('La variable MONGODB_URI es obligatoria');
  }

  await mongoose.connect(mongoUri);
  console.log('Conectado a MongoDB');
};

module.exports = connectDatabase;