const Discord = require('discord.js')

module.exports.run = async (client, message, args) => { 
      message.channel.send(`:chart_with_upwards_trend: ${Math.round(client.ws.ping)}ms`);
}