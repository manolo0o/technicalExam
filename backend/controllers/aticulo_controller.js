const Articulo = require('../models/articulo_model.js');

// Get all articles
exports.getAllArticles = async (req, res) => {
    try {
        const articles = await Articulo.find();
        res.status(200).json(articles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get article by ID
exports.getArticleById = async (req, res) => {
    try {
        const article = await Articulo.findById(req.params.id);
        if (!article) {
            return res.status(404).json({ message: 'Article not found' });
        }
        res.status(200).json(article);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new article
exports.createArticle = async (req, res) => {
    const article = new Articulo({
        Ar_Nombre: req.body.Ar_Nombre,
        Ar_Descripcion: req.body.Ar_Descripcion,
        Ar_Precio: req.body.Ar_Precio,
        Ar_Cantidad: req.body.Ar_Cantidad
    });

    try {
        const newArticle = await article.save();
        res.status(201).json(newArticle);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};