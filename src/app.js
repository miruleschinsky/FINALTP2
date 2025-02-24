import express from "express";
import donacionRoutes from "./routes/donacionRoutes.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", donacionRoutes);

export default app;

// "node server.js" para levantar el proyecto.