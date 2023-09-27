import express from 'express';
import Connection from './database/db.js';
import dotenv from "dotenv";
import router from './routes/route.js';
import cors from "cors";

const app = express();
dotenv.config();


app.use(cors());
app.use('/',router);


const PORT = 8000;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_NAME;

Connection(username, password, database);

app.listen(PORT,() => console.log(` server is running successfully on port ${PORT}`))