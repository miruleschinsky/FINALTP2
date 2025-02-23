import XMemoryDao from "./Memory/XMemoryDao.js"

class Factory{
    constructor(){

    }
    static factory=(modo)=>{
        if(modo === "memory"){
            return{
                xDao: new XMemoryDao(),
                UserDao: "userMemoryDao"
            };
        }
    }
}

export default Factory