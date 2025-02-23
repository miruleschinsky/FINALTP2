class XMemoryDao{
    constructor(){
        this.x = ["kuka", "canela"];
    }

    createDao = async (data) => {
        try {
          await this.x.push(data.name);
          return await data;
        } catch (error) {
          return error;
        }
      };
      getAllDao = async () => {
        try {
          const data = await this.x.join(" ");
          return data;
        } catch (error) {
          return error;
        }
      };
    /*create=async(info)=>{
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
          return  info;
        } catch (error) {
          return error;
        }
      };*/
}

export default XMemoryDao