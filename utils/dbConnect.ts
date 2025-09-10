import mongoose from "mongoose";

let isConnected = false;

const ConnectDB = async () => {

    if (isConnected) {
        console.log("MongoDB is already connected");
        return;
    }

    if (!process.env.MONGODB_URI) {
        throw new Error("mongoDB url env is not defined ")
    }

    try {

       const connect = await mongoose.connect(process.env.MONGODB_URI, { bufferCommands: false });
       return connect;

    } catch (error) {
        console.log("Error connecting to database", error);
        throw error;
    }
}

mongoose.connection.on('connected', () => {
    isConnected = true,
    console.log("Connected to database")
})

mongoose.connection.on('disconnected', () => {
    isConnected = false,
    console.log("Disconnected from database")
})

mongoose.connection.on('error', (error) => {
    console.log("Error connecting to database", error)
})

export default ConnectDB;