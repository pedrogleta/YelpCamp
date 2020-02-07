var express     = require('express'),
    app         = express(),
    bodyParser  = require('body-parser'),
    mongoose    = require('mongoose');

mongoose.connect('mongodb://localhost/yelp_camp',
{useNewUrlParser: true, useUnifiedTopology: true});
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//     {
//     name: 'Salmon Creek',
//     image: 'https://www.eusemfronteiras.com.br/wp-content/uploads/2016/11/bigstock-130669151-810x540.jpg'
//     }, function(err, campground){
//         if(err){
//             console.log(err);
//         } else {
//             console.log("Newly created campground: ");
//             console.log(campground);
//         };
//     };
// );

// var campgrounds = [
//     {name: 'Salmon Creek', image: 'https://www.eusemfronteiras.com.br/wp-content/uploads/2016/11/bigstock-130669151-810x540.jpg'},
//     {name: 'Granite Hill', image: 'https://i.pinimg.com/originals/91/ae/cc/91aeccfd6946dbe3cadf053b52466115.jpg'},
//     {name: 'Mountain Goat\'s rest', image: 'https://catracalivre.com.br/wp-content/uploads/sites/15/2017/04/iStock-584589782.jpg'}
// ];

app.get('/', function(req, res){
    res.render('landing');
});

app.get('/campgrounds', function(req, res){
    Campground.find({}, function(err, campgrounds){
        if(err){
            console.log(err);
        } else {
            res.render('campgrounds', {campgrounds: campgrounds});
        }
    })
    // res.render('campgrounds',{campgrounds: campgrounds});
});

app.post('/campgrounds', function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image}
    Campground.create(newCampground, function(err, newlyCreated){
        if (err){
            console.log(err);
        } else {
            res.redirect('/campgrounds');
        }
    })
    // campgrounds.push(newCampground)
    // res.redirect('/campgrounds');
});

app.get('/campgrounds/new', function(req, res){
    res.render('new');
});

app.listen('3000','localhost',function(){
    console.log('Server Started');
});