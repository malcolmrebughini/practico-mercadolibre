import axios from 'axios';

const itemsUrl = process.env.BROWSER ?
  '/api/items' : `http://localhost:${process.env.PORT || 3000}/api/items`;
  // Here I had to repeat the port thing. Sad day.

function get(q) {
  return axios.get(itemsUrl, { params: { q } })
    .then(response => response.data);
}

function getOne(itemId) {
  return axios.get(`${itemsUrl}/${itemId}`)
    .then(response => response.data);
}

export default {
  get,
  getOne,
};
