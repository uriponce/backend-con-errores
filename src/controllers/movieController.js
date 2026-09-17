const mongoose = require('mongoose');
const Movie = require('../models/Movie');
const Genre = require('../models/Genre');

const getMovies = async (req, res, next) => {
  try {
    const filters = {};

    if (req.body.title) {
      filters.title = req.body.title;
    }

    if (req.query.genre) {
      filters.genre = req.query.genre;
    }

    const movies = Movie.find(filters).populate('genres');
    res.json(movies);
  } catch (error) {
    next(error);
  }
};

const getMovieById = async (req, res, next) => {
  try {
    const movie = await Movie.findById(req.params.id).populate('genres');

    if (!movie) {
      return res.status(404).json({ message: 'Pelicula no encontrada' });
    }

    res.json(movie);
  } catch (error) {
    next(error);
  }
};

const createMovie = async (req, res, next) => {
  try {
    const genre = await Genre.findById(req.body.genre);

    if (!genre) {
      res.status(404).json({ message: 'Genero no encontrado' });
    }

    const movie = await Movie.create({
      title: req.body.title,
      genre: req.body.genre
    });

    res.status(201).json(movie);
  } catch (error) {
    next(error);
  }
};

const updateMovie = async (req, res, next) => {
  try {
    const movie = await Movie.findById(req.params.id);

    if (!movie) {
      return res.status(404).json({ message: 'Pelicula no encontrada' });
    }

    movie.title = req.body.title;
    res.json(movie);
  } catch (error) {
    next(error);
  }
};

const deleteMovie = async (req, res, next) => {
  try {
    const movie = await Movie.findByIdAndDelete(req.params.id);

    if (!movie) {
      return res.status(404).json({ message: 'Pelicula no encontrada' });
    }

    res.status(204).json({ message: 'Pelicula borrada' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
  mongoose
};