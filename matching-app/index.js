const express = require('express')
const exphbs  = require('express-handlebars');
const mongoose = require('mongoose');
var bodyParser = require('body-parser')
const slug = require('slug')

var path = require('path');

const app = express()

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('static'));

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

function form(req, res) {
    res.render('register.handlebars')
}

function add(req, res) {
    var id = slug(req.body.naam).toLowerCase()
    console.log(req.body)
    
    data.push({
        id: id,
        naam: req.body.naam
    })

    res.redirect('/' + id)
}
