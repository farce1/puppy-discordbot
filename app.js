const Discord = require('discord.js');
const config = require('./data/config');
const Music = require('discord.js-musicbot-addon');
const fs = require('fs');

//Bot Implementation
const bot = new Discord.Client();
bot.commands = new Discord.Collection();



//Reading all commands from commands folder
fs.readdir("./commands/clean/", (err, files) => {

    if(err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if(jsfile.length <= 0){
        console.log("Couldn't find commands.");
        return;
    }
    jsfile.forEach((f, i) =>{
        let props = require(`./commands/clean/${f}`);
        console.log(`${f} loaded!`);
        bot.commands.set(props.help.name, props);
    });
});
fs.readdir("./commands/fun/", (err, files) => {

    if(err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if(jsfile.length <= 0){
        console.log("Couldn't find commands.");
        return;
    }
    jsfile.forEach((f, i) =>{
        let props = require(`./commands/fun/${f}`);
        console.log(`${f} loaded!`);
        bot.commands.set(props.help.name, props);
    });
});
fs.readdir("./commands/info/", (err, files) => {

    if(err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if(jsfile.length <= 0){
        console.log("Couldn't find commands.");
        return;
    }
    jsfile.forEach((f, i) =>{
        let props = require(`./commands/info/${f}`);
        console.log(`${f} loaded!`);
        bot.commands.set(props.help.name, props);
    });
});
fs.readdir("./commands/usefull/", (err, files) => {

    if(err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if(jsfile.length <= 0){
        console.log("Couldn't find commands.");
        return;
    }
    jsfile.forEach((f, i) =>{
        let props = require(`./commands/usefull/${f}`);
        console.log(`${f} loaded!`);
        bot.commands.set(props.help.name, props);
    });
});

// Launching Bot
bot.on("ready", async () => {
    console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
});

// Setting all loaded commands
bot.on('message', async msg => {
    if (msg.author.bot) return undefined;
    if (!msg.content.startsWith(config.PREFIX)) return undefined;

    let messageArray = msg.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    let commandfile = bot.commands.get(cmd.slice(config.PREFIX.length));
    if (commandfile) commandfile.run(bot, msg, args);


});

// Music bot declaration

const music = Music.start(bot, {
    skipAlt: "stop",
    clearInvoker: true,
    youtubeKey: config.GOOGLE_TOKEN
});

bot.login(config.TOKEN);