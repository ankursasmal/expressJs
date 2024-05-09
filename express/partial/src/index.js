let express=require('express');
let path=require('path')
let app=express();
const hbs=require('hbs');

//**  same file ai dynamic and static render possible

// for static ja gulo static korbo taka static
 let staticpath=path.join(__dirname,'../public_static')
app.use(express.static(staticpath));


// for dynamic jagulo dynamc korbo sagulo dynamic
app.set('view engine','hbs');

// use partial file partial folder porjonto path require.
hbs.registerPartials(path.join(__dirname, '../views/part'));

// for static serve
app.get('/',(req,res)=>{
    res.sendFile(path.join(staticpath,'index.html' ))
})
app.get('/abou',(req,res)=>{
    res.sendFile(path.join(staticpath,'abou.html'))
})
app.get('/contact',(req,res)=>{
    res.sendFile(path.join(staticpath,'con.html'))
})


// for dynamic serve
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
app.get('*',(req,res)=>{
    res.render('404',{
       eror:'404 eeror on tk' 
    })
})

 
app.listen(8000,'127.0.0.1',()=>{
    console.log('ok')
})