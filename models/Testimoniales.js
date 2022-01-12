import Sequilize from "sequelize";
import db from "../config/db.js";

export const Testimonial = db.define("testimoniales", {
  nombre: {
    type: Sequilize.STRING,
  },
  correo: {
    type: Sequilize.STRING,
  },
  mensaje: {
    type: Sequilize.TEXT,
  },
});
