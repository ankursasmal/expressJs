// dynamic web page a use hoi
// pure static web page a use hoba na

let express=require("express");
let app=express();

app.use(function(req,res,next){
    next();
    })
// akha na sab app.thia use hoba

// req holo "/" tai , / a mana root a gala res ki sata responce
app.get("/",(req,res)=>{
    res.send('hello');

})
// if /about/value barabar chang hocha sa casa params use hoi
// app.get("/about/:anything",(req,res)=>{
// res.send( `usernameis ${req.params.anything as itis}`);
// this res send    , user thaka data ascha ti req.params(under ti).name ta
// }

app.get("/about",(req,res)=>{
    res.send('hello from about');
    
})
// about ar por ja likbi si anujai dynamicaly channge hoba
app.get("/about",(req,res)=>{
 res.send(`usernameis ${req.params.username}`);
    
})


//**  req.params routing casa  use ki kora hod??

 
// only one time listen korla hoba 
 app.listen(8000,()=>{
    console.log("ankur")
})