const express = require('express');
const controller = require('./items.controller');

const router = express.Router();


router.route('/')
  .get(controller.list);

router.route('/:itemId')
  .get(controller.item);


module.exports = router;
