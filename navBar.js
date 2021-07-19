const express=require("express");
const app=express();

app.set("view engine","hbs");

app.get("",(req,res)=>{
  res.render("index");
})

app.get("/home",(req,res)=>{
    res.render("home")
})

app.get("/about",(req,res)=>{
    res.render("about")
})
app.get("/contact",(req,res)=>{
    res.render("contact")
})

app.get("/service",(req,res)=>{
    res.render("service")
})

app.listen(5000,(err)=>{
    console.log("Server is running....at Port-5000")
})