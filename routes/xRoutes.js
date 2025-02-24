import { Router } from "express";
import XController from "../controllers/XController.js";

const xController= new XController()

const xRoutes= Router()

// Ruta para crear un juego
xRoutes.post("/", xController.create);

// Ruta para obtener todos los juegos
xRoutes.get("/", xController.getAll);

export default xRoutes