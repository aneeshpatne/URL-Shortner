import express from 'express';
import cors from 'cors';
import router from './routes/urlRoutes.mjs';
import  errorHandler from './middleware/errorHandler.mjs';
const app = express();
app.use(cors());
const corsOptions = {
    origin: 'https://url-shortner-frontend-rust.vercel.app',
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(express.json());
app.use('/', router);
app.use(errorHandler);
export default app;