const express = require('express');
const bodyParser = require('body-parser');
const IndexController = require('./controllers/index').IndexController;

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

const indexController = new IndexController();

app.get('/', indexController.getIndex.bind(indexController));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});