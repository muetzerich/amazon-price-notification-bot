require('dotenv').config();

var app = require('express')();
var http = require('http').Server(app);

require('./controllers/controllers').init(app)

let bot = require('./libs/telegramm/setup').initTelegrammBot();
require('./libs/telegramm/logic').run(bot)

http.listen(3000, function(){
    console.log('listening on *:3000');
});



