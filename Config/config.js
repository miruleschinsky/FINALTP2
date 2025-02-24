import "dotenv/config"

const SERVER_PORT = process.env.SERVER_PORT || 8080;
const MODO=process.env.MODO || "memory";

export{SERVER_PORT, MODO}