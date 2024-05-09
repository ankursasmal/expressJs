let express=require('express');
let path=require('path')
let app=express();
//**  same file ai dynamic and static render possible

// for static ja gulo static korbo taka static
 let staticpath=path.join(__dirname,'../public_static')
app.use(express.static(staticpath));


// for dynamic jagulo dynamc korbo sagulo dynamic
app.set('view engine','hbs');
// for views name change to templete_insteed_viewa below line (path of this file)
app.set('views',path.join(__dirname,"templete_insteed_viewa"))

//1 for static serve
app.get('/',(req,res)=>{
    res.sendFile(path.join(staticpath,'index.html' ))
})
app.get('/abou',(req,res)=>{
    res.sendFile(path.join(staticpath,'abou.html'))
})
app.get('/contact',(req,res)=>{
    res.sendFile(path.join(staticpath,'con.html'))
})


//2 for dynamic serve
// from database and api value
app.get('/about',(req,res)=>{
      res.render('about.hbs',{
        // dynamic data add from api or data base
        name:'ankur',
        title:'sasmal'
    })
})
app.get('/cont',(req,res)=>{
    
    res.render('cont')

  
})
 
app.listen(8000,'127.0.0.1',()=>{
    console.log('ok')
})