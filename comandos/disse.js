const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    const sayMessage = args.join(" ");
    message.delete().catch()
    message.channel.send(sayMessage);
}