var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('landing page');
});




app.listen('3000','localhost',function(){
    console.log('Server Started');
});