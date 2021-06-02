const Discord = require('discord.js');

process.on('unhandledRejection', (error, promise) => {
    console.log(' Oh Lord! We forgot to handle a promise rejection here: ', promise);
    console.log(' The error was: ', error );
  });

module.exports.run = async (client, message, args) => {
    if (!message.mentions.users.size) {
    var nuts = message.author;
    const seuAvatar = new Discord.MessageEmbed()
    .setColor('#00ff80')
    .setDescription('Avatar de ' + message.author.username)
	.setImage(nuts.avatarURL({ dynamic:true, format: 'jpg', size: 512 }))
    .setFooter('Requisitado por ' + message.author.username)
    .setTimestamp()
    message.channel.send(seuAvatar);
    }
    else 
    var taggedUser = message.mentions.users.first();
    this.sender = taggedUser.id;
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#00ff80')
    .setDescription('Avatar de ' + taggedUser.username)
	.setImage(taggedUser.avatarURL({ dynamic:true, format: 'jpg', size: 512 }))
    .setFooter('Requisitado por ' + message.author.username)
    .setTimestamp()
message.channel.send(exampleEmbed);
}