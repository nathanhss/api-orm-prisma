import * as dotenv from 'dotenv';
dotenv.config()

const DATABASE_URL = process.env.DATABASE_URL;
const SALT_ROUNDS = process.env.SALT_ROUNDS;

export default {
    DATABASE_URL,
    SALT_ROUNDS
}