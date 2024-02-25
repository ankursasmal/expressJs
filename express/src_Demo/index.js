let exp=require("express");
const path=require('path');
let app=exp();

// path two type absolute & relative
// relative ../. ae type 
// absolute user/express/ ai type


// absolute path ar jonno  function (take two arg), path.join(__dirname,"../foldername(public)")
// ja folder a jabi tar nam
console.log(path.join(__dirname,"../public_Demo"));
 
 let staticpath=path.join(__dirname,"../public_Demo");

// ja kono project express sanga jurar janno below line
app.use(exp.static(staticpath))


// must routing use for crate server
// for serving website using express

 app.get("/",(req,res)=>{
    res.send("<h1>ankur</h1>")
})
// port na likla sa kisa listen korba server create hoba na
 app.listen(8000,()=>{
    console.log('ankur sj')
 })