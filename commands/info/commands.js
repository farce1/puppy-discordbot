const Discord = require("discord.js");
const fs = require('fs');


module.exports.run = async (bot, message, args) => {

    fs.readdir('./commands', function(err, files){

        jsfile = files.filter(f => f.split(".").slice(-1).join().split(".").shift());
        let list = jsfile;

        console.log(jsfile);
        console.log('list : ' , list);
    });

};

module.exports.help = {
    name:"commands"
};