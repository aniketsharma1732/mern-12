import express from 'express';
import mongoose from 'mongoose';
import multer from 'multer';
import fs from 'fs';
import cors from 'cors';
import AuthController from "./controllers/AuthController.js";
dotenv.config();

const PORT = process.env.PORT || 3000;
app.use(cors());
const app = express();
app.use(express.json());    
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log("connected to database");
})
.catch((err) => {
    console.log(err);
});


app.use("./api/auth", AuthController);

app.get("/", (req, res) => {
    res.send("Hello, World!");
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


