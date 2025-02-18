const express = require('express');
const Connect = require('./conf/conection.js');
const cors = require('cors');

const db = new Connect();

const app = express();
const port = process.env.PORT || 3000;

//routes imports
const clienteRoutes = require('./routes/cliente_route.js');
const articuloRoutes = require('./routes/articulo_route.js');
const facturaRoutes = require('./routes/factura_route.js');
const kardexRoutes = require('./routes/kardex_route.js');

app.use(cors());
app.use(express.json());

// api routes
app.use('/clients', clienteRoutes);
app.use('/article', articuloRoutes);
app.use('/factura', facturaRoutes);
app.use('/kardex', kardexRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});