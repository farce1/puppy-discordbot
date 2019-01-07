
module.exports.run = async (bot, message, args) => {

    let numbers = ['1','2','3','4','5','6','7','8','9'];
    let num = 100;

    if(parseInt(args[1]) <= 100) {
        num = parseInt(args[1]);
    }
    message.channel.fetchMessages({limit: 100})
        .then(messages => {
            let msgs = messages.filter(msg =>
                   msg.content === '1'
                || msg.content === '2'
                || msg.content === '3'
                || msg.content === '4'
                || msg.content === '5'
                || msg.content === '6'
                || msg.content === '7'
                || msg.content === '8'
                || msg.content === '9'
            );
            if(msgs.size === 0) return message.author.send(`We could not find any messages containing numbers from 1-9`)
                .then(msg => msg.delete(10 * 1000)).catch(err => console.log(err.stack));

            message.channel.bulkDelete(msgs.first(num), true);

        });

    message.delete();


};





module.exports.help = {

    name: "onesclean"
};