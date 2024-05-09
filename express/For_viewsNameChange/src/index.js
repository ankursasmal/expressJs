let express=require('express');
let path=require('path')
let app=express();
// for use partials
 

//**  same file ai dynamic and static render possible

// for static ja gulo static korbo taka static
 let staticpath=path.join(__dirname,'../public_static')
app.use(express.static(staticpath));


// for dynamic jagulo dynamc korbo sagulo dynamic
app.set('view engine','hbs');
 // for use partial add path
 
// hbs.registerPartials(path.join(__dirname,'../views/part'))

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
      res.render('about')
})
app.get('/cont',(req,res)=>{
    
    res.render('cont')

  
})
 
// // 3.cross ak sanga use dynamic and static both use ak sanga
//  app.get('/', (req, res) => {
//     res.render('header'); // Render the header dynamic
//     res.sendFile(path.join(__dirname, 'public', 'index.html')); // Serve the static HTML file
//     res.render('footer'); // Render the footer dynamic
// });

 
app.listen(8000,'127.0.0.1',()=>{
    console.log('ok')

})