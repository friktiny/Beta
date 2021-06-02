const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
    console.log("bot iniciado, presente em " + client.guilds.cache.size + " servers")
    client.user.setActivity("b!ajuda", {type:"LISTENING"})
});

client.on("guildCreate", guild => {
    console.log("joined on " + guild.name)
    module.exports.run = async (client, message, args) => {
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#8000ff')
    .setAuthor('Salve salve, Beta Bot na área!')
	.setDescription("para saber meus comandos digite ${PREFIX}comandos")
    .setFooter("feito por mendz#3109")
    .setTimestamp()
    welcomeChannel.send(exampleEmbed);
    }
});

client.on("guildDelete", guild => {
    console.log("left" + client.guilds.size)
});

client.on("message", message => {
if (message.author.bot) return;
if (message.channel.type == "dm") return;
if
(!message.content.toLowerCase().startsWith(config.prefix))
return;
if(message.content.startsWith(`@!${client.user.id}>`)
|| message.content.startsWith(`@${client.user.id}>`)) return;

const args = message.content
.trim().slice(config.prefix.length)
.split(/ +/g);
const command = args.shift().toLowerCase();

try{
const commandFile = 
require(`./comandos/${command}.js`)
commandFile.run(client, message, args);
} catch (err) {
console.error("ocorreu um erro" + err);
}

process.on('uncaughtException', function (err) {
    console.error(err);
    console.log("Node NOT Exiting...");
  });
  
});

client.login(config.token);
