const express = require('express')
const router = express.Router();
const { searchProducts, descriptionProducts } = require('../controller/search.controller');


router.get('/', searchProducts);

router.get('/:id', descriptionProducts);

module.exports = router;  