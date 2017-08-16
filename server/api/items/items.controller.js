const mercadolibre = require('../../services/mercadolibre');


function getCategoryId(availableFilters) {
  return availableFilters
    .find(af => af.id === 'category')
    .values
    .reduce((category, value) => category.results < value.results ? value : category)
    .id;
}

module.exports.list = (req, res, next) => {
  return mercadolibre.search(req.query.q)
    .then(data => {
      const filtersCategories = data.filters.find(f => f.id === 'category');
      // If search didn't matched with a category already, get it my dude.
      if (!filtersCategories) {
        const categoryId = getCategoryId(data.available_filters);

        return Promise.all([
          data.results,
          mercadolibre.getCategory(categoryId),
        ]);
      }

      return Promise.all([
        data.results,
        filtersCategories.values[0]
      ]);
    })
    .then(([items, category]) => {
      const response = {
        items,
        categories: category.path_from_root.map(p => p.name),
      };

      return res.json(response);
    })
    .catch(next);
};

module.exports.item = (req, res, next) => {
  const { itemId } = req.params;

  return Promise.all([
    mercadolibre.getItem(itemId),
    mercadolibre.getItemDescription(itemId),
  ])
    .then(([item, description]) => {
      return Promise.all([
        item,
        description,
        mercadolibre.getCategory(item.category_id),
      ]);
    })
    .then(([item, description, category]) => {
      const response = {
        categories: category.path_from_root.map(p => p.name),
        item: Object.assign(item, { description }),
      };
      return res.json(response);
    })
    .catch(next);
};
