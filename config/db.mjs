import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const mongo_URI = process.env.MONGO_URI;
let isConnected;

export const connectDB = async () => {
    if (isConnected) {
        console.log('Using existing database connection');
        return;
    }

    try {
        const db = await mongoose.connect(mongo_URI, {
            maxPoolSize: 10,
        });
        isConnected = db.connections[0].readyState;
        console.log('MongoDB connected');
    } catch (err) {
        console.error(err);
    }
};
