import mongoose from "mongoose";
import config from '../config/config.js'

function connectDB() {
    const dbURI = config.DB_URL;

    mongoose
        .connect(dbURI)
        .then(() => console.log('Connected to MongoDB'))
        .catch((err) => console.error('Error connecting to MongoDB:', err));
}

export default connectDB;