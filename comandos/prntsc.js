const Discord = require('discord.js')
var pixabay = require("pixabay-api")

module.exports.run = async (client, message, args) => {
    function makeid(length) {
        var result           = [];
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result.push(characters.charAt(Math.floor(Math.random() * 
     charactersLength)));
       }
       return result.join('');
    }
    const random = new Discord.MessageEmbed()
    var print = ("https://prnt.sc/" + (makeid(6)))
    var lower = print.toLowerCase();
    message.channel.send(lower);
}