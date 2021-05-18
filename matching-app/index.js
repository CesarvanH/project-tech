//External files
require('./mongoose');

// Packages vars
const express = require('express');
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');
const slug = require('slug');
const path = require('path');
const dotenv = require('dotenv').config();
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

//Express shortcuts
const router = express.Router();
const app = express();

// Schemas
const Recipe = require('./models/recipes')


//Setting up express and handlebars 
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: false }));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('static'));

//Setting up the port
app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), function(){
    console.log('Server started on port'+app.get('port'));
});

//Setting up pages
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


//Get Items from database

app.get('/home', async function(req, res){
    const Recipes = await Recipe.find({}, (error, Recipes) => { 
        res.render('home', {Recipes}) 
    }).lean()

    // Recipe.create({ title: 'small' }, (error, Recipes) => {
    //     console.log(Recipes)
    //     console.log(error)
    // })
})


//Sent data to database

app.post("/addRecipe", (req, res) => {
    // const newRecipe = new Recipe(req.body);
    // newRecipe.save({title: req.body.recipeTitle})
    const newRecipe = new Recipe ({
            title: req.body.recipeTitle,
            description: req.body.recipeDesc
            }
    );
    newRecipe.save((err) => {});
});



  //Setting up 404
app.use(function(req,res){
    res.status(404);
    res.render('404');
});


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


