import mongoose from "mongoose";


const connectToMongoDB = async () =>{
    try {
        await mongoose.connect("mongodb+srv://cluster0:cZt4uZRyLlaxwXuQ@cluster0.iv50o9y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("connected to MongoDB");
    }
    catch(err){
        console.log("error connecting to MongoDB", err.message);
    }
}

export default connectToMongoDB; 