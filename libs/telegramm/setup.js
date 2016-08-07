module.exports = {
    initTelegrammBot: function () {
        let TelegramBot = require('node-telegram-bot-api');
        let options = {
            polling: true
        };
        let token = process.env.TELEGRAM_BOT_TOKEN || 'YOUR_TELEGRAM_BOT_TOKEN';
        return new TelegramBot(token, options);}
};
