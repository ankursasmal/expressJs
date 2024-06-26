const express=require("express");
const path=require("path");
// 1. for partial import hbs 
const app=express();
const port=8000;
const hbs=require('hbs')

//middle wear must likta hoba 
// hato middle wear banata pari next()forword kora next lline exiqution a
app.use(function(req,res,next){
next();
})
 
 app.use(express.static(path.join(__dirname,"../public")))
// 2.  janno 1 must equire 
// for dynamic website
// frist set the view engin
app.set("view engine","hbs");
// my pc it must decleat next line
app.set('views',path.join(__dirname,"../views"));

//2. for make partial or components registerPartials in path of partial folder
hbs.registerPartials(path.join(__dirname,"../views/partial")) 


// start
// template engine route
app.get("/",(req,res)=>{
    // res.send place res.render('file under views")
    res.render("index");
})


// jodi value pass or props pass korta chai
app.get("/about",(req,res)=>{
     res.render("about",{name:"amkirurrrrt"});

 })
 

//  params normaly jakono jaigai use kora jaba
//  app.get("/about/:user",(req,res)=>{
//     res.render("404",{error:'oops page not found',val:req.params.user});

//      }) 


app.get("/about/*",(req,res)=>{
        res.render("404",{error:'oops page not found',val:req.params.user});
    
         }) 
     
 
// before lister after all render
// 404 handel code
// *->univalssal/all;

// jodi about or exixting page asar por /about/anything then it also error
// solution 
app.get("/about/*",(req,res)=>{
    res.render("404",{error:'oops page not found'});
     })
// ja paga user jooar chance acha sa place a  abovefunction

// listen above but all render a sasa llikta hoba
// router top to button chack kora jodi kkono na pai sa ca * a asba
app.get("*",(req,res)=>{
res.render("404",{error:'oops page not found'});
 })

app.listen(port,()=>{
    console.log('we are in ')
})
