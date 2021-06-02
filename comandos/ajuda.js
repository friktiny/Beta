
const Discord = require("discord.js");

module.exports.run = async(bot, message, args, con) => {
    const peixe=('847784082829082624')
    const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#00ff80')
	.setTitle('Meus comandos')
	.addFields(
		{ name: 'b!avatar', value: 'Mostra sua foto de perfil ou a de outro usuário no servidor caso mencionado', inline: true },
		{ name: 'b!beta', value: 'Gera uma foto aleatória de um peixe Beta', inline: true },
        { name: 'b!disse', value: 'Faz o Beta dizer o que você quiser', inline: true },
        { name: 'b!embed', value: 'Cria um embed com sua foto de perfil e mensagem escrita apos o comando', inline: true },
        { name: 'b!id', value: 'Mostra o seu ID ou o ID de algum usuário mencionado presente no servidor', inline: true },
        { name: 'b!img', value: 'Gera uma imagem aleatória do Pixabay', inline: true },
        { name: 'b!ping', value: 'Mostra o ping do bot', inline: true },
        { name: 'b!prntsc', value: 'Gera um link aleatório para uma print no site Lightshot', inline: true },
        { name: 'b!sobre', value: 'Creditos da criação do bot', inline: true },
        )
    .setTimestamp()
message.channel.send(exampleEmbed);
};
