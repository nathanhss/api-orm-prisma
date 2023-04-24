import express from 'express';
import { router } from './routes';
import constants from './utils/constants';
import * as bcrypto from "bcrypt"

const app = express();

app.use(express.json());
app.use(router);

app.listen(Number(constants.SERVER_PORT), () => {
    console.log("server listening on port " + constants.SERVER_PORT)
});

