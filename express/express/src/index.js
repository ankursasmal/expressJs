let express=require('express');
let path=require('path')
let app=express();

console.log(path.join(__dirname,'../public'))
staticPath=path.join(__dirname,'../public');

// app.use ta middle wear for static web site
app.use(express.static(staticPath));

app.get('/',(req,res)=>{
   res.sendFile(path.join( path.join(__dirname,'../public'), 'index.html'));
// below line daor darkar nai
    // res.send('ok')
})
app.get('/about',(req,res)=>{
    res.sendFile(path.join( path.join(__dirname,'../public'), 'about.html'));
   
   
    // below line daor darkar nai
    // res.send('ok')
 
})
app.get('/cont',(req,res)=>{
    res.sendFile(path.join( path.join(__dirname,'../public'), 'cont.html'));
   
   
    // below line daor darkar nai
    // res.send('ok')
 
})
 
app.listen(8000,'127.0.0.1',()=>{
    console.log('ok')
})