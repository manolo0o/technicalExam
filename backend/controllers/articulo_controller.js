const Articulo = require('../models/articulo_model.js');

// Get all articles or search articles
exports.getAllArticles = async (req, res) => {
    try {
        const searchTerm = req.query.search;
        let articulos;
        if (searchTerm) {
            // Check if the search term is a valid ObjectId
            const isObjectId = /^[0-9a-fA-F]{24}$/.test(searchTerm);
            if (isObjectId) {
                articulos = await Articulo.find({
                    $or: [
                        { _id: searchTerm },
                        { Art_Nom: { $regex: searchTerm, $options: 'i' } },
                        { Art_Lab: { $regex: searchTerm, $options: 'i' } }
                    ]
                });
            } else {
                articulos = await Articulo.find({
                    $or: [
                        { Art_Nom: { $regex: searchTerm, $options: 'i' } },
                        { Art_Lab: { $regex: searchTerm, $options: 'i' } }
                    ]
                });
            }
        } else {
            articulos = await Articulo.find();
        }
        res.status(200).json(articulos);
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
        Art_Nom: req.body.Art_Nom,
        Art_Lab: req.body.Art_Lab,
        Art_Saldo: req.body.Art_Saldo,
        Art_Costo: req.body.Art_Costo,
        Art_PV: req.body.Art_PV
    });

    try {
        const newArticle = await article.save();
        res.status(201).json(newArticle);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};