
module.exports.run = async (bot, message, args) => {
     let num = 100;

    if(parseInt(args[1]) <= 100) {
        num = parseInt(args[1]);
    }
    message.channel.fetchMessages({limit: 100})
        .then(messages => {
            let msgs = messages.filter(msg => msg.author.bot && msg.pinned == false && msg.id != message.id);
            if(msgs.size === 0) return message.author.send(`We could not find any messages posted by bots`)
                .then(msg => msg.delete(10 * 1000)).catch(err => console.log(err.stack));

            message.channel.bulkDelete(msgs.first(num), true);

                });

    message.delete();


};


module.exports.help = {

    name: "botclean"
};