import { MODO } from "../Config/config.js";
import Factory from "../DAOs/Factory.js";

class XApi{

    constructor(){
        this.factory = Factory.factory(MODO);

        if (!this.factory || !this.factory.xDao) {
            throw new Error("Error: xDao no se inicializó correctamente en Factory");
        }
    }

    create=async(info)=>{
        try {
            if (!info) throw new Error("No hay info");

            //validarInfo
            const data =await this.factory.xDao.create(info)
            
            return  data;

        } catch (error) {
        throw error;
        }
    };
 
    getAll = async () => {
        try {
          // vallidar la palabra
          const info= await this.factory.xDao.getAll();
          return info;
        } catch (error) {
          return error;
        }
      };
}

export default XApi;