const Discord = require('discord.js');
module.exports =
{
    name: "ping",
    alias: [],
    execute(client, message, args){
  
const ping = new Discord.MessageEmbed()

	.setTitle(`🏓 PONG! **${client.ws.ping}**`)
	.setImage('https://thumbs.gfycat.com/GoldenScaryBlowfish-size_restricted.gif')
  .setColor('RANDOM')
	
message.reply({ embeds: [ping], allowedMentions: { repliedUser: false } })

}
  
};