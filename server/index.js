
// import all dependencies what y have installed
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv'
import mongoose from 'mongoose';


// app configuration 

dotenv.config();
const app = express();
app.use(express.json());


// connet to the .env file

const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGO_URL;

// checking mongo url 
if (!MONGOURL){
    console.log('Mongo url not found');
    process.exit(1)
};



// Build connection to mongo db

mongoose
        .connect(MONGOURL)
        .then(()=>{
            console.log(" ✅ Our DataBase Connected Successfully!...");
            // Port Number cheking 
            app.listen(PORT,()=>{
                console.log(`🚀 Our Db server running on prot : ${PORT}`);
            });
        })
        .catch((error) => {
            console.log(`❌ MongoDB connection failed: ${error.message}`);
            
        })
        // else through error
        