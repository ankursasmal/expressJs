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
app.get("/about",(req,res)=>{
    res.send('hello from about');
    
})
 
// only one time listen korla hoba 
 app.listen(8000,()=>{
    console.log("ankur")
})