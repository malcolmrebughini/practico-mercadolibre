require('babel-polyfill');
const mercadolibre = require('../../services/mercadolibre');


function getCategoryId(availableFilters) {
  return availableFilters
    .find(af => af.id === 'category')
    .values
    .reduce((category, value) => category.results < value.results ? value : category)
    .id;
}

module.exports.list = function* (req, res) {
  const searchResults = yield mercadolibre.search(req.query.q);
  const filtersCategories = searchResults.filters.find(f => f.id === 'category');
  const category = filtersCategories ?
    filtersCategories.values[0] :
    // If search didn't matched with a category already, get it my dude.
    yield mercadolibre.getCategory(
      getCategoryId(searchResults.available_filters)
    );

  const response = {
    items: searchResults.results,
    categories: category.path_from_root.map(p => p.name),
  };

  return res.json(response);
};

module.exports.item = function* (req, res) {
  const { itemId } = req.params;

  const item = yield mercadolibre.getItem(itemId);
  const description = yield mercadolibre.getItemDescription(itemId);
  const category = yield mercadolibre.getCategory(item.category_id);

  const response = {
    categories: category.path_from_root.map(p => p.name),
    item: Object.assign(item, { description }),
  }

  return res.json(response);
};
