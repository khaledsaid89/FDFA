const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("602084995120627722")
setInterval(function() {
channel.send(`mostfa big`);
}, 30)
})

client.login(process.env.BOT_TOKEN);