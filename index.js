const express= require('express');


app=express();
app.set('port',process.env.PORT||3000);

app.get('/',(req,res)=>{
    res.send("Home Page")
});

app.get('/about/',(req,res)=>{
   res.send("About Page")
});


app.use((req,res)=>{
    res.type('text/plain')
    res.status(404)
    res.send('404 Not Found')
})

app.use((req,res)=>{
    res.status(500)
    res.type('text/plain')
    res.send("500 Internal server Error")

})

app.listen(app.get('port'),(req,res)=>{
    console.log("Server running on port " + app.get('port'));
    
})