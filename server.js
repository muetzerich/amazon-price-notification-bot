require('dotenv').config();

let app = require('express')();
var exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var http = require('http').Server(app);

require('./controllers/controllers').init(app)



let bot = require('./libs/telegramm/setup').initTelegrammBot();
require('./libs/telegramm/logic').run(bot)

http.listen(3000, function(){
    console.log('listening on *:3000');
});



