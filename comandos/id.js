const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    if (!message.mentions.users.size) {
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#00ff80')
    .setAuthor('Seu ID é')
    .setDescription(message.author.id)
    .setTimestamp()
    message.channel.send(exampleEmbed);  
    }
    const taggedUser = message.mentions.users.first();
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#8000ff')
    .setAuthor('O ID de ' + taggedUser.username + ' é')
	.setDescription(taggedUser.id)
    .setTimestamp()
message.channel.send(exampleEmbed);
}