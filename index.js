const express =require('express');

//creates our deafult layout main.handlebars
const handlebars=require('express3-handlebars').create({defaultLayout:'main'});


const app=express();

//bring in the static files
app.use(express.static(__dirname +'/public'));

app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');
app.set('port',process.env.PORT ||3000);


app.get('/',(req,res)=>{
    res.render('home')
});

app.get('/about/',(req,res)=>{
  res.render("about")
});

app.use((req,res)=>{
    res.status(404)
    res.render('404')
});

app.use((req,res)=>{
    res.status(500)
    res.render("500")
   
});

app.listen(app.get('port'),()=>{
    console.log("Server is running at http://localhost:" +app.get('port')+ " Press Ctrl C to Terminate");
});