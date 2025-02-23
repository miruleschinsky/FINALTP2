import { Router } from "express";
import XController from "../controllers/XControllers.js";

const xController= new XController()

const xRoutes= Router()

xRoutes.post("/", xController.create)
xRoutes.get("/", xController.getAll)


export default xRoutes