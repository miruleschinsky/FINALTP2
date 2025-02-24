
let donaciones = []; 

class DonacionRepository {

  static agregarDonacion(donacion) {
    donaciones.push(donacion);
    return donacion;
  }
  static filtrarDonacionesPorMonto(monto) {
    return donaciones.filter(donacion => donacion.monto > monto && donacion.donante !== 'Anónimo');

  }
}

export default DonacionRepository;