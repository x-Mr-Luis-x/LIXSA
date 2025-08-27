const Discord = require("discord.js");

module.exports =
{
    name: "leadepru",
    aliases: [],
execute(client, message, args){

const embed = new Discord.MessageEmbed()

.setColor('#c066ee') .setImage('https://media.discordapp.net/attachments/844680428007063662/975509462787948604/Diseno_sin_titulo.png?width=751&height=422')

client.channels.cache.get('844680428007063662').send(
  {
  embeds: [embed]
    }
   )
  }
};