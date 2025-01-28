const {UserModel} = require("../models/user")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
require("dotenv").config()

const { model } = require("mongoose")

const signupController = async(req,res)=>{

    try{

        const {firstName , lastName , email , password} = req.body;
        // We can use zod or validator library  for validating req.body
      
          if(!firstName || !lastName || !email || !password){
              return res.status(400).json({
                  message : "Kindly fill all the details"
              })
          }

          const hashedPassword = await bcrypt.hash(password,10);
      
      
        await UserModel.create({
            firstName : firstName,
            lastName : lastName,
            email : email,
            password : hashedPassword
        })
      
    
         return res.status(201).json({
          message : "Signed up succesfully"
         })

    }catch(error){
        console.error("Error during signup:", error);
    return res.status(500).json({
      message: "Server error, Please try again later " + error.message,
    })

}


}
const signinController = async(req,res)=>{

    const {email , password} = req.body;


  try{

    if(!email || !password) return res.status(400).json({
        message : "email or password must not be empty"
    })


    const user = await UserModel.findOne({
        email : email
    })

    if(!user) return res.status(400).json({message : "No user exists , sign up instead"});


    const isPasswordMatch = await bcrypt.compare(password , user.password);

    if(!isPasswordMatch) return res.status(400).json({
        message : "wrong password"
    })



    const token = jwt.sign({
        userId : user._id
    },process.env.JWT_SECRET) //signing JWT TOKEN of the USER 


    res.cookie("token",token,{
        expires: new Date(Date.now() + 48 *60*60*1000)//48 hrs
    }) //storing token inside cookies
      
    return res.json({
        message : "You are logged in",
        token : token
    
    })


  }catch(error){
    console.error("Error during signin:", error);
    return res.status(500).json({
      message: "Server error, Please try again later " + error.message,
  })
}

   

}
const profileController = async(req,res)=>{


    
    try{
      

        const user = await UserModel.findOne({
            _id : req.userId
        })

        if(!user) return res.status(400).json({
            message : "No User Found"
        })

      
         const username = user.firstName;
         const email = user.email;
       

        return res.json({
            username,
            email
        })


      
    }catch(error){

        console.error("Error during fetching profile info:", error);
    return res.status(500).json({
      message: "Server error, Please try again later " + error.message,

    })
}

}


module.exports = {
    signupController,
    signinController,
    profileController
}