import express, { request, response } from "express";
import router from "./routes/index.js";
import db from "./config/db.js";

const app = express();

//Conectar a la base de datos
db.authenticate()
  .then(() => console.log("Base de datos conectada"))
  .catch(console.log);

//Definir puerto
const port = process.env.PORT || 4000;

//Middleware
//Obtener el año actual
app.use((req, res, next) => {
  const year = new Date();
  res.locals.fechaActual = year.getFullYear();
  return next();
});

//Bodyparser
app.use(express.urlencoded({ extended: true }));
//Definir public
app.use(express.static("public"));
//Habilidar template engine
app.set("view engine", "pug");
//agregar Router
app.use(router);

app.listen(port, () => {
  console.log(`El servidor esta funcionando en el puerto ${port}`);
});
