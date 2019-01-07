

module.exports.run = async (bot, message, args) => {

    const symbols = new RegExp(/[-!$%^&>()_+|~={}\[\]:;?,.\/]/);

    let num = 100;
    if(parseInt(args[1]) <= 100) {
        num = parseInt(args[1]);
    }
    message.channel.fetchMessages({ limit: 100 })
        .then(messages => {
            let msgs = messages.filter(msg => symbols.test(msg.content.substring(0, 2)) && msg.id != message.id);

            if (msgs.size === 0) return message.author.send(`We could not find any command messages inside`)
                .then(msg => msg.delete(10 * 1000)).catch(err => console.log(err.stack));

            message.channel.bulkDelete(msgs.first(num), true);

        });
    message.delete();


};

module.exports.help = {

    name: "prefixclean"
};