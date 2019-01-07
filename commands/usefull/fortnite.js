const Discord = require("discord.js");
const config = require("../../data/config.js");
const Fortnite = require("fortnite");
const ft = new Fortnite(config.FORTNITE_TOKEN);

module.exports.run = async (bot,message,args) => {

    let username = args[0];
    let gamemode = args[1];
    let platform = args[2] || "pc";

    if (!['solo', 'duo', 'squad', 'lifetime'].includes(gamemode.toLowerCase())) {
        return message
            .reply('Provide command in the following way !fortnite playername gametype {solo,duo,squad,lifetime}');
    }
    let data = ft.user(username, platform)
        .then(data => {
            let stats = data.stats;
            let lifetime = stats.lifetime;

            switch(gamemode){
                case 'solo' :{
                    let solostats = stats.solo;
                    let score = solostats.score;
                    let kd = solostats.kd;
                    let matches = solostats.matches;
                    let kills = solostats.kills;
                    let wins = solostats.wins;
                    let top3 = solostats.top_3;

                    let embed = new Discord.RichEmbed()
                        .setTitle("Fortnite Stats Solo")
                        .setAuthor(data.username)
                        .setColor("#15f153")
                        .addField("Score", score, true)
                        .addField("Matches Played", matches, true)
                        .addField("Wins" , wins, true)
                        .addField("Kills", kills, true)
                        .addField("KD" , kd, true)
                        .addField("Top 3" , top3 , true);

                    message.channel.send(embed);
                    break
                }
                case 'duo':{
                    let duotats = stats.duo;
                    let score = duotats.score;
                    let kd = duotats.kd;
                    let matches = duotats.matches;
                    let kills = duotats.kills;
                    let wins = duotats.wins;
                    let top3 = duotats.top_3;

                    let embed = new Discord.RichEmbed()
                        .setTitle("Fortnite Stats Duo")
                        .setAuthor(data.username)
                        .setColor("#15f153")
                        .addField("Score", score, true)
                        .addField("Matches Played", matches, true)
                        .addField("Wins" , wins, true)
                        .addField("Kills", kills, true)
                        .addField("KD" , kd, true)
                        .addField("Top 3" , top3 , true);

                    message.channel.send(embed);
                    break
                }
                case 'squad' :{
                    let squadstats = stats.squad;
                    let score = squadstats.score;
                    let kd = squadstats.kd;
                    let matches = squadstats.matches;
                    let kills = squadstats.kills;
                    let wins = squadstats.wins;
                    let top3 = squadstats.top_3;

                    let embed = new Discord.RichEmbed()
                        .setTitle("Fortnite Stats Squad")
                        .setAuthor(data.username)
                        .setColor("#15f153")
                        .addField("Score", score, true)
                        .addField("Matches Played", matches, true)
                        .addField("Wins" , wins, true)
                        .addField("Kills", kills, true)
                        .addField("KD" , kd, true)
                        .addField("Top 3" , top3 , true);

                    message.channel.send(embed);
                    break
                }
                case 'lifetime':{
                    let top3 = lifetime[0]['Top 5s'];
                    let top5 = lifetime[1]['Top 3s'];
                    let top6 = lifetime[2]['Top 6s'];
                    let top10 = lifetime[3]['Top 10'];
                    let top12 = lifetime[4]['Top 12s'];
                    let top25 = lifetime[5]['Top 25s'];
                    let score = lifetime[6]['Score'];
                    let mPlayed = lifetime[7]['Matches Played'];
                    let wins = lifetime[8]['Wins'];
                    let winper = lifetime[9]['Win%'];
                    let kills = lifetime[10]['Kills'];
                    let kd = lifetime[11]['K/d'];


                    let embed = new Discord.RichEmbed()
                        .setTitle("Fortnite Overall Stats")
                        .setAuthor(data.username)
                        .setColor("#15f153")
                        .addField("Score", score, true)
                        .addField("Kills", kills, true)
                        .addField("Wins" , wins, true)
                        .addField("Win Percentage", winper, true)
                        .addField("KD" , kd, true)
                        .addField("Matches Played", mPlayed, true)
                        .addField("Top 3" , top3 , true)
                        .addField("Top 5" , top5 , true)
                        .addField("Top 6" , top6 , true)
                        .addField("Top 10" , top10 , true)
                        .addField("Top 12" , top12 , true)
                        .addField("Top 25" , top25 , true)


                    message.channel.send(embed);
                }
            }

        }).catch(e => {
           console.log(e);
           message.channel.send("Player not found in the DB");
        });

};

module.exports.help = {
    name: "fortnite"
};