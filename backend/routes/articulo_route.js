const express = require('express');
const router = express.Router();
const {
    getAllArticles,
    getArticleById,
    createArticle
} = require('../controllers/aticulo_controller.js');


// Get all articles
router.get('/', getAllArticles);

// Get article by ID
router.get('/:id', getArticleById);

// Create a new article
router.post('/', createArticle);

module.exports = router;