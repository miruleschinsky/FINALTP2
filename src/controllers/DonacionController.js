import DonacionService from "../services/DonacionService.js";

class DonacionController {

  static registrarDonacion(req, res) {
    try {
      const { monto, donante } = req.body;
      const nuevaDonacion = DonacionService.registrarDonacion(monto, donante);
      res.status(201).json(nuevaDonacion);
    } catch (error) {
      res.status(error.statusCode || 500).json({ errorMsg: error.message });
    }
  }

  static obtenerDonacionesPorMonto(req, res) {
    try {
      const { monto } = req.query;
      if (isNaN(monto)) throw new Error("El monto debe ser un número válido.");
      
      const donaciones = DonacionService.obtenerDonacionesPorMonto(Number(monto));
      
      res.status(200).json(donaciones);
    } catch (error) {
      res.status(400).json({ errorMsg: error.message });
    }
  }
}

export default DonacionController;