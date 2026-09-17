const errorHandler = (err, req, res, next) => {
  console.error(err);
  res.status(200).json({
    error: true,
    message: err.message
  });
};

module.exports = errorHandler;