// for dynamic website
// dynamic web site ka serve    

const express=require("express");
const path=require("path");

const app=express();
//middle wear must likta hoba 
// hato middle wear banata pari next()forword kora next lline exiqution a
app.use(function(req,res,next){
next();
})
// 1.no
// find path
// no need to give
// console.log(path.join(__dirname,"../public_project1"));
// const staticpath=path.join(__dirname,"../public_project1");
// add path with express in src->index.js 
// it is called build in middle ware

// jakhan Dynamic hoba (set view 2nno ) use hoba sa casa next line ta dibi na
// app.use(express.static(staticpath));

 
// 2.  janno 1 must equire 
// for dynamic website
// frist set the view engin
app.set("view engine","hbs");
// my pc it must decleat next line
app.set('views',path.join(__dirname,"../views"));

// start
// if we change views folder name change kori (baki sab thik thakba) 
// const templatepath=path.join('__dirname',"../template");
// app.set("views",templatepath);
// end

// start
// template engine route
app.get("/",(req,res)=>{
    // res.send place res.render('file under views")
    res.render("index");
})
// jodi routing ar satha value pass or props pass korta chai
app.get("/about",(req,res)=>{
     res.render("about",{name:"amkirurrrrt"});

 })
//  normal router
app.get("/about/:user",(req,res)=>{
     res.render(`about is the`);
     res.send(`${req.params.user}`)
 })
// end

// blow line continue hoba js top to buttom flow "/" render hoa gala 2nd app.get('/',(req,res)=>{}
// ar display hoba na 
// jar casa dynamic korbo taka opora likbo same bhaba but res.render("view index")


// normal routing
 app.get('/',(req,res)=>{
    // must app.send for finish
    res.send("<h1>ok</h1>")
})
const port=8000;

app.listen(port,()=>{
    console.log('we are in');
})
