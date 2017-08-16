const axios = require('axios');

const apiUrl = 'https://api.mercadolibre.com';
const searchUrl = '/sites/MLA/search';
const categoryUrl = '/categories/:id';
const itemUrl = '/items/:id';
const itemDescriptionUrl = `${itemUrl}/description`;


function search(query) {
  return axios.get(`${apiUrl}${searchUrl}`, { params: { q: query, limit: 4 } })
    .then(response => response.data);
}

function getCategory(categoryId) {
  return axios.get(`${apiUrl}${categoryUrl.replace(':id', categoryId)}`)
    .then(response => response.data);
}

function getItem(itemId) {
  return axios.get(`${apiUrl}${itemUrl.replace(':id', itemId)}`)
    .then(response => response.data);
}

function getItemDescription(itemId) {
  return axios.get(`${apiUrl}${itemDescriptionUrl.replace(':id', itemId)}`)
    .then(response => response.data);
}


module.exports = {
  search,
  getCategory,
  getItem,
  getItemDescription,
};
