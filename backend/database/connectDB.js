import mongoose from "mongoose";


const connectToMongoDB = async () =>{
    try {
        await mongoose.connect("mongodb+srv://kalp:FDHpO3YxDYihJHrZ@chatapp.jwuw7sf.mongodb.net/?appName=chatapp");
        console.log("connected to MongoDB");
    }
    catch(err){
        console.log("error connecting to MongoDB", err.message);
    }
}

export default connectToMongoDB; 