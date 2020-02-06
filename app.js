var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

var campgrounds = [
    {name: 'Salmon Creek', image: 'https://www.eusemfronteiras.com.br/wp-content/uploads/2016/11/bigstock-130669151-810x540.jpg'},
    {name: 'Granite Hill', image: 'https://i.pinimg.com/originals/91/ae/cc/91aeccfd6946dbe3cadf053b52466115.jpg'},
    {name: 'Mountain Goat\'s rest', image: 'https://catracalivre.com.br/wp-content/uploads/sites/15/2017/04/iStock-584589782.jpg'}
];

app.get('/', function(req, res){
    res.render('landing');
});

app.get('/campgrounds', function(req, res){
    res.render('campgrounds',{campgrounds: campgrounds});
});

app.post('/campgrounds', function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image}
    campgrounds.push(newCampground)
    res.redirect('/campgrounds');
});

app.get('/campgrounds/new', function(req, res){
    res.render('new');
});

app.listen('3000','localhost',function(){
    console.log('Server Started');
});