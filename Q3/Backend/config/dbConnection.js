require("dotenv").config();

const mongoose = require("mongoose")


async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`Succesfully connected to DB`);
        
    }

    catch(error){
       console.error("Error while connecting to DB: ",error);
    }
}


module.exports = {
    connectDB
}
