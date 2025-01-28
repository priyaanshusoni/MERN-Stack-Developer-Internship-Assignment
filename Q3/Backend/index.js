const express  = require("express");
const jwt = require("jsonwebtoken")
const app = express();
const cookieParser = require("cookie-parser")
const cors = require("cors")
app.use(cors({
    origin: "http://localhost:5173",  // Allow your frontend origin
    credentials: true,               // Allow cookies and credentials to be sent
  }));
app.use(express.json());
app.use(cookieParser())
const {router} = require("./routes/userRouter")
const {connectDB} = require("./config/dbConnection")

 

//Implemeting Express router
app.use("/",router);



  


async function main(){

    try{
        await connectDB();

        app.listen(process.env.PORT || 7777,()=>{
            console.log(`Server is listening on http://localhost:${process.env.PORT}`);
        })

    }catch(error){
        console.log(error);
    }
   
}

   

main()



    





