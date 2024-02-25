let express=require('express');
let path=require('path');

let app=express();
let port=3000;


app.set("view engine","ejs");
app.set('views', path.join(__dirname, '../views'));

app.get("/",(req,res)=>{
    res.render("index",{age:12,name:'ankur',roll:1});
})
app.get("/contact",(req,res)=>{
    res.render("contact",{sasmal:"eoppwpppwp"});
})
app.get("/",(req,res)=>{
    res.send("ankur");
})
app.listen(port);
// app.listen(port,()=>{
//     console.log(`listen on ${port}`);
// })