class Donacion {
  constructor(monto, donante) {
    this.monto = monto;
    this.donante = donante || "Anónima"; 
  }
}

export default Donacion;