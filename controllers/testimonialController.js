import { request, response } from "express";
import { Testimonial } from "../models/Testimoniales.js";

const guardarTestimonial = async (req = request, res = response) => {
  const { nombre, correo, mensaje } = req.body;

  const errores = [];

  if (nombre.trim() === "") {
    errores.push({ mensaje: "Nombre esta vacio" });
  }

  if (correo.trim() === "") {
    errores.push({ mensaje: "Correo esta vacio" });
  }

  if (mensaje.trim() === "") {
    errores.push({ mensaje: "Mensaje esta vacio" });
  }

  if (errores.length > 0) {
    return res.render("testimoniales", {
      errores,
      pagina: "Testimoniales",
      nombre,
      correo,
      mensaje,
    });
  } else {
    try {
      await Testimonial.create({
        nombre,
        correo,
        mensaje,
      });

      res.redirect("/testimoniales");
    } catch (error) {
      console.log(error);
    }
  }
};

export { guardarTestimonial };
