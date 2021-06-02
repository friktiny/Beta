const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#00ff80')
    .setAuthor(message.author.username + ' disse', message.author.avatarURL({ dynamic:true }))
	.setDescription(args.join(" "))
    message.delete().catch()
message.channel.send(exampleEmbed);
}