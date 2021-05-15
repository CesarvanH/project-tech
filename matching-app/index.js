// Packages vars
const express = require('express')
const app = express()
const exphbs  = require('express-handlebars');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const slug = require('slug')
const path = require('path');


//Setting up express and handlebars 
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: false }))
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('static'));

//Setting up the port and pages
app.set('port', (process.env.PORT || 3000));

app.get('/', function(req, res){
    res.render('login',{
        content: 'Login',
        published: true,
    });
});

app.get('/register', function(req, res){
    res.render('register',{
        content: 'Registreer maar',
        published: true,
    });
});

app.get('/home', function(req, res){
    res.render('home',{
        content: 'Dit is je hoofdscherm',
        published: true,
    });
});

app.get('/results', function(req, res){
    res.render('result',{
        content: 'Dit zijn je resultaten',
        published: true,
    });
});

app.listen(app.get('port'), function(){
    console.log('Server started on port'+app.get('port'));
});

app.post('/',add)


//Login Form functies
function loginForm(req, res) {
    res.render('login.handlebars')
}

function add(req, res) {
    res.render('home', {naam: req.body.naam})
}


