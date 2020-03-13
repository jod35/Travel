const express=require('express'); //bring in expess

const app =express(); //make an express 

app.set('port',process.env.PORT||3000);
app.get('/',(req,res)=>{
    res.type('text/plain')
    res.send("Home Page")
});

app.get('about/',(req,res)=>{
    res.type('text/plain')
    res.send("About Page")
});

app.use((req,res)=>{
    res.type('text/plain')
    res.status(404)
    res.send('404 - NOT FOUND')
});

app.use((req,res)=>{
    res.type('text/plain')
    res.status(404)
    res.send('500 -SERVER ERROR')
});

app.listen(app.get('port'),()=>{
    console.log("Express started on http://localhost:" + app.get('port') 
     + "press Ctrl + C to terminate"
    );
    
}
);