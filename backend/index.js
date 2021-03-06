import express from 'express';
import { config } from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import { connectDB } from './config/db';
import routes from './routes/Posts';

config();
connectDB();

const app = express();

app.use(bodyParser.json({ limit: '100mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));
app.use(cors());

app.use('/posts', routes);

const { PORT } = process.env;

app.listen(PORT, console.log(`server running at port ${PORT}`));
