import dotenv from 'dotenv';
dotenv.config();
import app from './app.mjs';
const PORT = process.env.PORT || 5000;
import { connectDB } from './config/db.mjs';
connectDB();
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));