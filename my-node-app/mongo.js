

import express from "express";
import mongoose from "mongoose"; // Importing Mongoose to interact with MongoDB
import bcrypt from "bcryptjs"; // Importing Bcrypt for password hashing

const PORT = 3000;

const app = express();
app.use(express.json());

// ----------------------------------------------------------------------------
// MongoDB Connection:
// ----------------------------------------------------------------------------
// mongoose.connect() establishes a connection to the MongoDB database.
// It returns a promise that resolves on success and rejects on error.

mongoose
  .connect(
    "mongodb+srv://aniket2457:aniket12@mern-12-project.nvpmeea.mongodb.net/",
  )
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.log(err);
  });
  //hi

// ----------------------------------------------------------------------------
// Define Schema:
// ----------------------------------------------------------------------------
// A Schema maps to a MongoDB collection and defines the shape of the documents within that collection.

const UserSchema = new mongoose.Schema({
  email: String,
  username: String,
  password: String,
});

// ----------------------------------------------------------------------------
// Create Model:
// ----------------------------------------------------------------------------
// A Model is a class with which we construct documents.
// The first argument is the singular name of the collection your model is for.
// Mongoose automatically looks for the plural, lowercased version of your model name.
// 'User' -> 'users' collection

const User = mongoose.model("User", UserSchema);

// ----------------------------------------------------------------------------
// Routes (CRUD Operations):
// ----------------------------------------------------------------------------

// Create (Register):
app.post("/register", async (req, res) => {
  //   const { email, username, password } = req.body;
  let email = req.body.email;
  let username = req.body.username;
  let password = req.body.password;

  // Hashing the password using bcrypt (with a salt round of 10)
  let hashedPassword = await bcrypt.hash(password, 10);

  // Creating a new instance of the User model
  const newUser = new User({
    email: email,
    username: username,
    password: hashedPassword,
  });

  // Saving the new user document to the database
  const savedUser = await newUser.save();

  if (!savedUser)
    return res.status(400).send({ message: "Error creating user" });

  res.status(201).send({ message: "user created successfully" });
});

// Read (Get All Users):
app.get("/allusers", async (req, res) => {
  // User.find() retrieves all documents from the 'users' collection
  const users = await User.find();

  if (!users) return res.status(404).send({ message: "No users found" });

  res.status(200).send(users);
});

// app.put("/update/:id", async(req,res)=>{})

app.post("/login", async (req,res)=>{
  let email=req.body.email;
  let password = req.body.password;

  const user= await User.find({email:email});
  if(!user) return res.status(404). send({message:"user not found"});

  const isMatch =await  bcrypt.compare(password, user.password);
  if(!isMatch)  return res.status(202). send({message:"password is invalid"});


  const token =jwt.sign(

    {email:user.email,
      id:user._id,
    },
    secret,
  )

})


const verifyToken = (req, res, next)=>{ 
  const authHeader= req.headers.authorization;
  if(!authHeader || !authHeader.startsWith("Bearer")){
    return res.status(401).json({message:"access denied, no token available"})
  } 
  const token=authHeader.split(" ")[1];

  
}

app.get("/", (req, res) => {
  res.end("hii");
});

app.listen(PORT, () => {
  console.log("server started");
});