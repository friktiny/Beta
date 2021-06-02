const Discord = require('discord.js')
var pixabay = require("pixabay-api")
var key ="21834636-80997c500eebd26540de1ccd1"

module.exports.run = async (client, message, args) => {
    pixabay.searchImages(key, 'beta fish').then((r) => {
     const random = new Discord.MessageEmbed()
      .setAuthor('Seu Peixe Beta aleatório')
      .setColor('#00ff80')
      .setTimestamp()
      .setFooter('Requisitado por ' + message.author.username)
      .setImage((r.hits[Math.floor(Math.random() * r.hits.length)].largeImageURL));
    message.channel.send(random);
})}