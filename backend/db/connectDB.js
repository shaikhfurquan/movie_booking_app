import mongoose from 'mongoose';


export const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log('Connected to DB');
    } catch (error) {
        console.error('Error connecting to database:', error.message);
    }
};


