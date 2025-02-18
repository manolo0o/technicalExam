# My MVC App

This is a simple MVC application built with JavaScript. The application follows the Model-View-Controller architecture, separating concerns to enhance maintainability and scalability.

## Project Structure

```
my-mvc-app
├── src
│   ├── controllers
│   │   └── index.js         # Contains the IndexController class for handling requests
│   ├── models
│   │   └── index.js         # Contains the Model class for data management
│   ├── views
│   │   └── index.html       # The main HTML view of the application
│   └── app.js               # Entry point of the application
├── package.json              # NPM configuration file
└── README.md                 # Project documentation
```

## Installation

To install the necessary dependencies, run:

```
npm install
```

## Usage

To start the application, use the following command:

```
node src/app.js
```

Visit `http://localhost:3000` in your browser to view the application.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License.

-> Creación  tablas

--Cliente--
Cl_Nombre
Cl_Apellido
Cl_Contacto
Cl_Nit
Cl_Documento
Cl_Cupo
Cl_Plazo
--------

--articulos--
Ar_tCod
Art_Nom
Art_Lab
Art_Saldo
Art_Costo
Ar_tPV
----------

--factura--
FT_NumFactura
id_Cliente
FT_Fecha
id_Producto
-----------

--facturaKardex--
FK_CodProd
FK_CantProd
FK_Costo
-----------------	 

Queries:
Client = get client by document or nit ---> nombre, cupo, plazo, cartera, disponible
Article = get by id ---> nombre, laboratios
