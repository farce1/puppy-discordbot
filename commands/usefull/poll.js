const Discord = require('discord.js');

module.exports.run = async (bot, message, args, tools) => {

    if (!message.member.hasPermission('MANAGE_GUILD') && message.author.id !== '357555941215961099') return message.channels.send('Sorry, you don\'t have permission to create poll!').then(msg => msg.delete({timeout: 10000}));
    if (!args.join(' ')) return message.channel.send('Usage: poll <title>').then(msg => msg.delete({timeout: 10000}));

    const embed = new Discord.RichEmbed()
        .setTitle(args.join(' '))
        .setFooter('React to vote on Poll!')
        .setColor('#7289DA')
    const pollTitle = await message.channel.send({ embed });
    await pollTitle.react(`1%E2%83%A3`);
    await pollTitle.react(`2%E2%83%A3`);

    const filter = (reaction) => reaction.emoji.name === '1%E2%83%A3';
    const collector = pollTitle.createReactionCollector(filter, { time: 15000 });
   // collector.on('collect', r => console.log(`Collected ${r.emoji.name}`));
   // collector.on('end', collected => console.log(`Collected ${collected.size} items`));

    const filter1 = (reaction) => reaction.emoji.name === '2%E2%83%A3';
    const collector1 = pollTitle.createReactionCollector(filter1, { time: 15000 });
  //  collector1.on('collect', r => console.log(`Collected ${r.emoji.name}`));
   // collector1.on('end', collected => console.log(`Collected ${collected.size} items`));
};

module.exports.help = {

    name: "poll"
};