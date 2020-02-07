var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://letildren:Drowssap72299@letappcluster-f3nje.gcp.mongodb.net/test',
 {useNewUrlParser: true, useUnifiedTopology: true});

var campSchema = new mongoose.Schema({
    name: String,
    age: Number
});

var Camp = mongoose.model('Camp', campSchema);

// var ricarda = new Camp({
//     name: 'Ricarda',
//     age: 98
// });

// ricarda.save(function(err, camp){
//     if (err){
//         console.log('DEU ERRADO')
//     } else {
//         console.log('ricarda saved to db');
//         console.log(camp)
//     };
// });

Camp.create({
    name: "batata",
    age: 21
}, function(err, camp){
    if(err){
        console.log(err);
    } else {
        console.log(camp);
    };
});

Camp.find({}, function(err, camps){
    if (err){
        console.log('error');
        console.log('err');
    } else {
        console.log('all camps');
        console.log(camps)
    };
})

