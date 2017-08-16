import axios from 'axios';

const itemsUrl = 'http://localhost:3000/api/items';

function get(q) {
  return axios.get(itemsUrl, { params: { q } })
    .then(response =>  response.data);
}

function getOne(itemId) {
  return axios.get(`${itemsUrl}/${itemId}`)
    .then(response =>  response.data);
}

export default {
  get,
  getOne,
}
