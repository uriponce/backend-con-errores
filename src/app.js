const express = require('express');
const genreRoutes = require('./routes/genreRoutes');
const movieRoutes = require('./routes/movieRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(express.json());
app.get('/', (req, res) => {
  res.json({ message: 'Movies API' });
});
app.use('/api/genres', genreRoutes);
app.use('/api/movies', movieRoutes);
app.use(errorHandler);

module.exports = app;