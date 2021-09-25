const express = require('express');
const router = express.Router();
const peliculaController = require("../controllers/peliculaController");


router.post("/", peliculaController.crearPelicula )
router.get("/", peliculaController.obtenerPeliculas)
router.put("/:id", peliculaController.editarPelicula)
router.get("/:id", peliculaController.obtenerPelicula) 
router.delete("/:id", peliculaController.eliminarPelicula)

module.exports = router
