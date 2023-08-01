import mongoose from "mongoose";
import Colors from "colors";


const connectDB= async()=>{
    try{ 
  
   const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected to mongodb database ${conn.connection.host}`.bgCyan.white);
    } catch(error){
      console.log(`error in mongodb ${error}`);
    }
}


export default connectDB;