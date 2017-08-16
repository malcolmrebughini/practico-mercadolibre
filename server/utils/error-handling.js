function middleware(err, req, res, next) {
  return res.json({ message: 'Something went wrong', error: err.stack });
}


module.exports = middleware;
