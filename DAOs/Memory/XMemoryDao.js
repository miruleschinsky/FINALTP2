class XMemoryDao{
    constructor(){
        this.memory = [];
    }

    
    create=async(info)=>{
        try {
            
        this.memory.push(info)
        return await info;

        } catch (error) {
        throw error;
        }
    };

    getAll = async () => {
        try {
          const data = await this.memory.join(" ");
          return  data;
        } catch (error) {
          return error;
        }
      };
}

export default XMemoryDao