let expres=require('express')
// return funtion
let  app=expres();
// fun under many property and method


let port=8000;
// get api for routing bes=> get display data
app.get('/',(req,res)=>{
    res.write('<h1>eooeo</h1>')
res.send( );
})
app.get('/about',(req,res)=>{
    res.statusCode=200;
    res.json({
        a:'akny',
        1:'kdkkd'
    })
    res.send([{
        a:'akny',
     }])
})

app.get('/contact',(req,res)=>{
   res.status(200).send('clrr prpr')
})

app.listen(port,'127.0.0.1',()=>{
    console.log('listening')
})