const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#00ff80')
    .setAuthor('Beta Bot')
	.setTitle('Bot multi-uso experimental')
    .setTimestamp()
    .setFooter('made in brazil by mendz#3109');
message.channel.send(exampleEmbed);
}