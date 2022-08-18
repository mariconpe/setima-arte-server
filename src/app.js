import express from 'express'
import cors from 'cors';
import dontenv from 'dotenv'
import db from './config/dbConnect.js'
import routes from './routes/index.js'

const env = dontenv.config({path: "./config.env"})

db.on('error', console.log.bind(console, 'Erro de conexão'));
db.once('open', () => {
    console.log('Conexão com DB feita com sucesso')
});

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});  

app.use(express.json());

routes(app);

export default app;