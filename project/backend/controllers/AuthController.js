import e from "express";
import User from "../models/User.js";
import bcrypt from "bcryptjs"; 
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();


const AuthController = express();

// create (register)

AuthController.post("./register", async(req, res) => {
   try{
    const {email, username, password, role} = req.body;
    // let email= req.body.email;
    // let username= req.body.username;
    // let password= req.body.password;

    const existed= await User.findOne({email:email});
    if(existed) return res.status(404).json({message:"the user already exists"});
    

    // hashing the password using bcrypt (with a salt round of 10)
    let hashpassword = await bcrypt.hash(password, 10);

    // creating a new instance of the User model

    const newUser= new User({email, username, hasspasword, role}); 
    
    // const newUser = new User({
    //     email:email,
    //     username:username,
    //     password:hashpassword,
    // })

    // saving the new user document to the database
    const savedUser= await newUser.save();

    if(!savedUser) return res.status(400).json({message:"something went wrong"});
    res.status(201).json({message:"user created successfully"});
   } catch(err){
    res.status(404).json({error: err.message });
    
   }

});

// login

AuthController.post("./login", async(req, res)=>{
    let email= req.body.email;
    let password= req.body.password;
    let secret="aniket123"

    const user= await User.findOne({email:email});
    if(!user) return res.status(400).send({message:"user is not saved"});
    
    const isMatch= await bycrypt.compare(password, user.password);
    if(!isMatch) return res.status(400).send({message:"password is invalid"});


})


export default AuthController; 