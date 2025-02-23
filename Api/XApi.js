import { MODO } from "../Config/config.js";
import Factory from "../DAOs/Factory.js";

class XApi{

    constructor(){
        this.factory=Factory.factory(MODO);
    }

    create=async(info)=>{
        try {
            //validarInfo
            const info =await this.factory.xDao.create(data)
            
            return await info;

        } catch (error) {
        throw error;
        }
    };
 
    getAll = async () => {
        try {
          // vallidar la palabra
          const info= await this.factory.xDao.getAllDao();
          return info;
        } catch (error) {
          return error;
        }
      };
}

export default XApi;