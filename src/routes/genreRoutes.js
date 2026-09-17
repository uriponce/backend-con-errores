const express = require('express');
const {
  getGenres,
  getGenreById,
  createGenre,
  deleteGenre
} = require('../controllers/genreController');

const router = express.Router();

router.get('/', getGenres);
router.get('/:genreId', getGenreById);
router.post('/', createGenre);
router.delete('/:id', deleteGenre);

module.exports = router;