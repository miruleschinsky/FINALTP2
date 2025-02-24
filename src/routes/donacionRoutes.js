import { Router } from "express";
import DonacionController from "../controllers/DonacionController.js";

const router = Router();

router.post("/donaciones", DonacionController.registrarDonacion);
router.get("/donaciones", DonacionController.obtenerDonacionesPorMonto);  

export default router;