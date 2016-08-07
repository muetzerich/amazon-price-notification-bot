module.exports = {
    run: bot => {
        saved = new Array();
        bot.getMe().then(me => {
            console.log('Hi my name is %s!', me.username)
        });
        bot.getUpdates().then(message=> {
            console.log(message);
        });

        bot.onText(/\/note/, msg => {
            var chatId = msg.chat.id;
            console.log(chatId)
            var opts = {
                reply_markup: JSON.stringify({
                    keyboard: [
                        ['new Note'],
                        ['Show me all Notes']]
                })
            };
            bot.sendMessage(chatId, "Please choose one", opts)

        });

        bot.onText(/\/all/, msg => {
            saved.forEach(entry =>{
                bot.sendMessage(msg.chat.id, entry.text)

            })
        });

        bot.onText(/new/, msg => {
            let chatId = msg.chat.id;
            let opts = {
                reply_markup: JSON.stringify({
                        force_reply: true
                    }
                )};
            bot.sendMessage(chatId, "Please insert note", opts).then(sended =>{
                bot.onReplyToMessage(sended.chat.id, sended.message_id, message => {
                    var chatId = message.chat.id;
                    console.log(chatId)
                    saved.push(message)
                });
            })
        });


    }
}


