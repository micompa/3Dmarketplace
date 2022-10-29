const express=require("express"); //crea un objeto llamado express
const app = express();

app.use(express.json());

//Importamos las rutas
const productos=require("./routes/products")

app.use('/api',productos)

module.exports = app