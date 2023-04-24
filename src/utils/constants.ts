import * as dotenv from 'dotenv';
dotenv.config()

const DATABASE_URL = process.env.DATABASE_URL;
const SALT_ROUNDS = process.env.SALT_ROUNDS;
const SERVER_PORT = process.env.SERVER_PORT;

export default {
    DATABASE_URL,
    SALT_ROUNDS,
    SERVER_PORT
}