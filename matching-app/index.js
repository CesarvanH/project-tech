//External files
require('./db/mongoose');

// Packages vars
const express = require('express');
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');
const slug = require('slug');
const path = require('path');
const app = express();
const dotenv = require('dotenv').config();


// Recepes
const recipeArray = [
    {
        name: "Gegrilde peer met citroenyoghurt", 
        desc: "Een lekker peren gerecht voor op de barbeque. Ideaal voor als er bezoek komt!"
    },
    {
        name: "Nachos met guacamole", 
        desc: "Nacho's ontstonden doordat een Mexicaanse chef overgebleven tortilla's in driehoekjes sneed."
    },
    {
        name: "Burrito's", 
        desc: "Een burrito is een gevulde, opgerolde bloemtortilla."
    },
    {
        name: "Gegrilde mais", 
        desc: "Een gegrilde maiskolf, 'elote', is een bekend Mexicaans streetfoodgerecht."
    }
]

// Schemas
const Recipe = require('./models/recipes')


//Setting up express and handlebars 
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: false }));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('static'));

//Setting up the port and pages
app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), function(){
    console.log('Server started on port'+app.get('port'));
});

app.get('/', function(req, res){
    res.render('login',{
        published: true,
    });
});

app.get('/home', function(req, res){
    res.render('home',{
        published: true,
        recepten: recipeArray
    });
});

app.get('/register', function(req, res){
    res.render('register',{
        published: true,
    });
});

app.get('/results', function(req, res){
    res.render('result',{
        published: true,
    });
});

app.use(function(req,res){
    res.status(404);
    res.render('404');
});

//Search 


//db new recipe insertion
app.use(express.json());

app.post('/recipes', (req, res) => {
    const recipe = new Recipe(req.body);
    recipe.save().then((recipe) =>  {
        res.status(201).send(recipe);
    }).catch((error) => {
        res.status(400).send(error);
    })
})
