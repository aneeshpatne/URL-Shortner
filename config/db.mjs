import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const mongo_URI = process.env.MONGO_URI;
export const connectDB = async () => {
    try{
        await mongoose.connect(mongo_URI);
        console.log('MongoDB connected');
    }
    catch(err){
        console.error(err);
    }
}