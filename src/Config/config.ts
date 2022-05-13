import dotenv from "dotenv";
dotenv.config();

const config = {
    POKE_API_SERVER: process.env.POKE_API_SERVER_INITIAL,
}



export default config;