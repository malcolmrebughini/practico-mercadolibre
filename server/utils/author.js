function addAuthorMiddleware(name, lastname) {
  const author = { name, lastname };

  return (req, res, next) => {
    const json = res.json;
    res.json = function(response) {
      const newResponse = Object.assign({}, response, { author });
      json.call(this, newResponse);
    }

    next();
  }
}


module.exports = {
  addAuthorMiddleware,
}