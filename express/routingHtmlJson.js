const exp=require("express")
let app=exp();
let port=8000;
app.get("/",(req,res)=>{
    res.send("home")
})
app.get("/about",(req,res)=>{
    // multiline line html likhla res.write("<P>adkdkdkdkddllld dkd</P>")
    // res.writeHead('Content-Type'='text/html');
    // res.write(`<h1>now about</h1>`);
    // res.write(`<h1>now about</h1>`)
    // res.write(`<h1>now about</h1>`)
    // res.write(`<h1>now about</h1>`)
    // res.write(`<h1>now about</h1>`)
    // res.write(`<h1>now about</h1>`)
    // hole process end korar janno must res.send(),node js a res.end()
    res.send(`<h1>now about</h1>`)

})
app.get("/place",(req,res)=>{
    // single line html likhla res.send("<P>adkdkdkdkddllld dkd</P>")
    res.status(404). send("here all placess")
})
app.get("/jsonconverter",(req,res)=>{
//  two process to convert into  obj to json or arry of obj to json
// 1st process

    //  res. send({
    //     name:'ankur',
    //     id:1,
    //     roll:1
    //  })

     // 2 nd insted of res.send we can use res.json arry of obj also same
res.json([{
    name:'ankur',
    id:1,
    roll:1
 },{
    name:'ankur',
    id:4,
    roll:1
 },{
    name:'ankur',
    id:2,
    roll:1
 },{
    name:'ankur',
    id:6,
    roll:1
 },{
    name:'ankur',
    id:0,
    roll:1
 },{
    name:'ankur',
    id:8,
    roll:1
 },{
    name:undefined,
    id:null,
    roll:1
 }])

//  end korar janno must end likta hoba
res.send()

})

app.get("/contact",(req,res)=>{
    // a bhaba o likla o hoi
    res.status(200).send("<h1>welcome contact</h1>")
})


// listen korta hoba
app.listen(port,()=>{
    console.log(`listen op port${port}`)
})