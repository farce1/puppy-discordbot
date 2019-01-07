const Discord = require('discord.js');


module.exports.run = async (bot,message,args) => {

    // Play files natively
    let VC = message.member.voiceChannel;
    if (!VC)
        return message.reply("MESSAGE IF NOT IN A VOICE CHANNEL")
    VC.join()
        .then(connection => {
            message.channel.send(`${message.author} is roaring!`);
            const dispatcher = connection.playFile('./src/burp.mp3');
            // dispatcher.on("end", end => {
            //     VC.leave()
            // });
        })
        .catch(console.error);

};

module.exports.help = {

    name: "roar"
}