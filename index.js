const express =require('express');
const handlebars=require('express3-handlebars').create({defaultLayout:'main'});


const app=express();


app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');
app.set('port',process.env.PORT ||3000);


app.get('/',(req,res)=>{
    res.send('Home Page')
});

app.get('/about/',(req,res)=>{
  res.send("ABout Page")
});

app.use((req,res)=>{
    res.status(400)
    res.send("404 Not Found")
    res.type('text/plain')

});

app.use((req,res)=>{
    res.status(500)
    res.send("500 Internal Server Error")
    res.type("text/plain")
});

app.listen(app.get('port'),()=>{
    console.log("Server is running at http://localhost:" +app.get('port')+ " Press Ctrl C to Terminate");
});