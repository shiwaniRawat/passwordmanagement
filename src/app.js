const express=require('express');//configer express
const path=require('path');
const hbs=require('hbs');
const app=express();//all method and of express is in app


//include db
require("./db/conn");
const Register=require("./models/register");

/*process.env is a reference to the system environment 
variables. PORT means the application expects an 
environment variable named “PORT” to be set.*/
const port = process.env.PORT || 8000;

/*public static path
console.log(path.join(__dirname,"../public"));*/
const static_path=path.join(__dirname,"../public");
const template_path=path.join(__dirname,"../templates/views");
const partials_path=path.join(__dirname,"../templates/partials");

//seeting view engine
app.set("view engine","hbs");
app.set('views',template_path);
//register the partial
hbs.registerPartials(partials_path);
app.use(express.static(static_path));


//routing
app.get("", (req,res)=>{
    // res.send("hello static page")
    res.render("index")
})



app.get("/about", (req,res)=>{
    // res.send("hello about")
    res.render('about')
})

app.get("/register", (req,res)=>{
    // res.send("hello about")
    res.render('register')
})
app.post("/register", async(req,res)=>{
    try{
        console.log(req.body.username)

    }catch(error){
        res.status(400).send(error);
    }
})

// app.get("*", (req,res)=>{
//     res.send("404 page not found")
// })

//server will listen 
app.listen(port ,()=>{
    console.log(`hi ${port}`);
})

