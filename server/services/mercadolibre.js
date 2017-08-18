const axios = require('axios');
const config = require('../config/environment');


const searchUrl = '/sites/MLA/search';
const categoryUrl = '/categories/:id';
const itemUrl = '/items/:id';
const itemDescriptionUrl = `${itemUrl}/description`;


function search(query) {
  return axios.get(`${config.mercadolibreApiUrl}${searchUrl}`, { params: { q: query, limit: 4 } })
    .then(response => response.data);
}

function getCategory(categoryId) {
  return axios.get(`${config.mercadolibreApiUrl}${categoryUrl.replace(':id', categoryId)}`)
    .then(response => response.data);
}

function getItem(itemId) {
  return axios.get(`${config.mercadolibreApiUrl}${itemUrl.replace(':id', itemId)}`)
    .then(response => response.data);
}

function getItemDescription(itemId) {
  return axios.get(`${config.mercadolibreApiUrl}${itemDescriptionUrl.replace(':id', itemId)}`)
    .then(response => response.data);
}


module.exports = {
  search,
  getCategory,
  getItem,
  getItemDescription,
};
