var express = require('express');
const res = require('express/lib/response');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function(req, res){
    res.render("../view/index");
});

app.get('/offlinePage', function(req,res){
    res.render("../view/offlinePage");
});

app.listen(3000, function(){
    console.log('Executando na porta 3000');
});