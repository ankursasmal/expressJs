let express=require('express')
let app=express();
let path=require('path')
app.use(express.static(path.join(__dirname,"../public")));

app.set('view engine','ejs');
 app.use((req,res,next)=>{
    console.log('dnll')
    next();
})
 
app.get('/',(req,res)=>{
    res.render('cont')
res.sendFile(path.join(path.join(__dirname,"../public"),'index.html'))

res.render('about' );
}
)
app.get('/abou',(req,res)=>{
    res.sendFile(path.join(path.join(__dirname,"../public"),'abou.html'))
    }
)  
app.get('/con',(req,res)=>{
    res.sendFile(path.join(path.join(__dirname,"../public"),'con.html'))
    }
)  

app.get('/profile/:usr',(req,res)=>{
    res.send(`helle ${req.params.usr}`)
})
app.get('/contact',(req,res)=>{
    res.render('cont',{
        name:'amlir',
        title:'asamal'
    })}
    )
    app.get('/about',(req,res)=>{
        res.render('about',{
            name:'amlir',
            title:'asamal'
        })}
        )
        app.get('*',(req,res)=>{
            res.render('404',{
                err:new Error('yui ib hjj bjj')
            })}
            )

app.listen(8000,'127.0.0.1',()=>{
    console.log('ok')
})