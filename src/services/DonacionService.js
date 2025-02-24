import Donacion from "../models/Donacion.js";
import DonacionRepository from "../repositories/DonacionRepository.js";

class DonacionService {

  static validarMonto(monto) {
    return monto > 0;
  }

  static registrarDonacion(monto, donante) {
    if (!this.validarMonto(monto)) {
      const error = new Error("El monto de la donación debe ser mayor a cero.");
      error.statusCode = 400;
      throw error;
    }

    const nuevaDonacion = new Donacion(monto, donante);
    return DonacionRepository.agregarDonacion(nuevaDonacion);
  }

  static obtenerDonacionesPorMonto(monto) {
    return DonacionRepository.filtrarDonacionesPorMonto(monto);
  }
}
export default DonacionService;