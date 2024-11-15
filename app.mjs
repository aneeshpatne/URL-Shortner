import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/urlRoutes.mjs';
import  errorHandler from './middleware/errorHandler.mjs';
const app = express();
app.use(express.json());
app.use('/', router);
app.use(errorHandler);
export default app;