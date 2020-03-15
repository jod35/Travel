const express =require('express');
const fortune=require('./lib/fortunes');

//creates our deafult layout main.handlebars
const handlebars=require('express3-handlebars').create({defaultLayout:'main'});

const fortunes = [
    "Conquer your fears or they will conquer you.",
    "Rivers need springs.",
    "Do not fear what you don't know.",
    "You will have a pleasant surprise.",
    "Whenever possible, keep it simple.",
    ];


const app=express();

//bring in the static files
app.use(express.static(__dirname +'/public'));

app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');
app.set('port',process.env.PORT ||5000);

app.use((req,res,next)=>{
    res.locals.showTests=app.get('env') !== 'production' && req.query.test===1;
    next();
});


app.get('/',(req,res)=>{
    res.render('home')
});

app.get('/about/',(req,res)=>{
res.render('about',{'fortune':fortune.getFortunes()}) //returns a virtua; fortune cookie
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