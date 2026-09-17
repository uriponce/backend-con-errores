const Genre = require('../models/Genre');

const getGenres = async (req, res, next) => {
  try {
    const genres = await Genre.find();
    res.json(genres);
  } catch (error) {
    next(error);
  }
};

const getGenreById = async (req, res, next) => {
  try {
    const genre = await Genre.findById(req.params.id);

    if (!genre) {
      return res.status(404).json({ message: 'Genero no encontrado' });
    }

    res.json(genre);
  } catch (error) {
    next(error);
  }
};

const createGenre = async (req, res, next) => {
  try {
    const genre = await Genre.create({ name: req.body.name });
    res.status(201).json(genre);
  } catch (error) {
    next(error);
  }
};

const deleteGenre = async (req, res, next) => {
  try {
    const genre = await Genre.findByIdAndDelete(req.params.id);

    if (!genre) {
      return res.status(404).json({ message: 'Genero no encontrado' });
    }

    res.json({ message: 'Genero borrado' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getGenres,
  getGenreById,
  createGenre,
  deleteGenre
};