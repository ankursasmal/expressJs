// for static web site (params dose not use)
// static web site ka serve    

let express=require("express");
let path=require("path");

let app=express();

// 1.no
// find path
console.log(path.join(__dirname,"../public_project1"));
let staticpath=path.join(__dirname,"../public_project1");
 
 app.use(express.static(staticpath));

const port=8000;

// pure static casa only app.get root and listen on portno any two thing

 app.get('/',(req,res)=>{
    // must res.send for finish
    res.send("ok")
})

// start  
//  pure static web site a   param use hoi na
// a purely static website without any server-side processing or dynamic content,
//  using route parameters (req.params) in Express might not be necessary.
// Static websites typically consist of HTML, CSS, and client-side JavaScript,
//  and they don't involve server-side processing or route parameters. In a static
//   website, the server serves pre-existing HTML files, and there's no need for 
//   server-side dynamic content generation.

// code
// app.get("index3.html/:user",(req,res)=>{

//      res.send(`user is ${req.params.user}`)
// })

// end


app.listen(port,()=>{
    console.log('we are in ')
})
