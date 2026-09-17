require('dotenv').config();

const connectDatabase = require('../config/database');
const Genre = require('../models/Genre');
const Movie = require('../models/Movie');

const seed = async () => {
  await connectDatabase();
  await Movie.deleteMany({});
  await Genre.deleteMany({});

  const genres = await Genre.insertMany([
    { name: 'Accion' },
    { name: 'Comedia' },
    { name: 'Drama' }
  ]);

  await Movie.insertMany([
    { title: 'Mad Max', genre: '64a000000000000000000001' },
    { title: 'The Hangover', genre: '64a000000000000000000001' },
    { title: 'The Godfather', genre: '64a000000000000000000001' }
  ]);

  console.log(`Seed completado: ${genres.length} generos y 3 peliculas`);
  process.exit(0);
};

seed().catch((error) => {
  console.error('Error al ejecutar el seed:', error.message);
  process.exit(1);
});