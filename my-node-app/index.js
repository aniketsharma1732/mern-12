import express from "express";
import ejs from "ejs";


const PORT = 3000;
const app= express();
app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.json());

app.get("/", (req, res)=>{
    res.send("hello from home page");
});

app.get("/about", (req,res)=>{
    // res.send("hello from the about page");
    res.render("about");
    
});

app.post("/login", (req,res)=>{
    console.log(req.body)
    res.end("requesti success")

});

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT} `);
})