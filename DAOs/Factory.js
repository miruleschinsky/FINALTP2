import XMemoryDao from "./Memory/XMemoryDao.js";

class Factory {
    constructor() {}

    static factory(modo) {
        if (modo === "memory") {
            return {
                xDao: new XMemoryDao(), // ✅ Asegurar que esta propiedad exista
                UserDao: "userMemoryDao"
            };
        }
        
        // ⚠️ Si no entra en el modo "memory", devolver un error
        throw new Error(`Modo '${modo}' no es válido en Factory`);
    }
}

export default Factory;