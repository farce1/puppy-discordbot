const Discord = require('discord.js');
const superagent = require('superagent');

module.exports.run = async (bot,message,args) =>{

    let {body} = await superagent
        .get('https://random.dog/woof.json');

    let dogembed = new Discord.RichEmbed()
        .setColor("#ff9900")
        .setTitle("Look at this cute Puppy")
        .setImage(body.url);


    message.channel.send(`A nice dogo for you ${message.author}` ,dogembed);


}



module.exports.help = {

    name: "dailypuppy"
}