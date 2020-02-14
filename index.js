/*const Discord = require("discord.js");
const client = new Discord.Client(); */

const { Client } = require("discord.js");
const { config } = require("dotenv");

const bot = new Client({
    disableEveryone: true
});

config({
    path: __dirname + "/.env"
})

// DANS LA FONCTION LE BOT EST EN LIGNE
bot.on("ready", () => {
    bot.user.setUsername("Shindeiru");
    bot.user.setActivity("Preparation du bot");
    // console.log(`Je suis en ligne, mon nom est:  ${bot.user.username}`);
    bot._setPresence({
        game: {
            name: "",
            type: ""
        }
    })
});

bot.on("message", (message) => {
    
    if (message.content === "!ping") {
        message.reply("pong")
    }
    if (message.content.indexOf("info") == 0 || message.content.indexOf("kzarka") == 0) {
        console.log("il est lààààà");
    }

})

bot.on("channelCreate", (channel) => {
    console.log(`crée le : ${channel.createdAt.getDate().toLocaleString()}`);
})

bot.on("guildMemberAdd", (member) => {
    console.log(`Tout le monde dit bonjour à ${member.user.username} le chiiiiien`);
})

bot.login(process.env.TOKEN);