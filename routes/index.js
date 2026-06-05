const express = require('express');
const pageController = require('../controllers/pageController');

const router = express.Router();

router.get('/', pageController.home);
router.get('/product', pageController.product);
router.get('/about', pageController.about);
router.get('/contact', pageController.contact);

module.exports = router;
