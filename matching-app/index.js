//External files
require('./db/mongoose');

// Packages vars
const express = require('express');
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');
const slug = require('slug');
const path = require('path');
const app = express();

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

app.get('/', function(req, res){
    res.render('login',{
        published: true,
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

app.listen(app.get('port'), function(){
    console.log('Server started on port'+app.get('port'));
});

app.post('/',addName)


//Login Form functies
function loginForm(req, res) {
    res.render('login.handlebars')
}

function addName(req, res) {
    res.render('home', {naam: req.body.naam})
    setImmediate(() => {
      });
}

app.use(express.json());

app.post('/recipes', (req, res) => {
    const recipe = new Recipe(req.body);
    recipe.save().then((recipe) =>  {
        res.status(201).send(recipe);
    }).catch((error) => {
        res.status(400).send(error);
    })
})
