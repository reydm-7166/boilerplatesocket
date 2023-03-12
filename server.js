const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.use(express.static(__dirname + "/public"));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

const server = app.listen(1337);

const io = require('socket.io')(server);

app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function(req, res) {
    
    res.render('index');
});




io.on('connection', function (socket) {
    console.log("connected")

});


app.post('/submit', (req, res) => {
    
})