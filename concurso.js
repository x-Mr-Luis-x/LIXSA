const Discord = require("discord.js");
module.exports =
{
    name: "torneoxd",
    aliases: [],
    execute(client, message, args){

const embed = new Discord.MessageEmbed()

	.setColor('#c81919')
	.setTitle('<:pokebola:1137268978511786095> | Torneo')
  .addField('🎁| PREMIO', '\<:play:1137271438903091222> ➣ Google Play $10')
  .addField('⟣ Σ·₊・TE INTERESA POKÉMON?੭・₊· ͟͟͞꒰ ⟢', 'Pues bienvenido nuevo entrenador durante un tiempo te podrás preparar capturando y evolucionando a tus pokemones para un torneo')
  .addField('⟣ Σ·₊・INDICACIONES੭・₊· ͟͟͞꒰ ⟢', 'Capturar y evoluvionar Pokemones en el canal esxclusivo:\n\<#1137243601378750465>')
.setThumbnail('https://media.discordapp.net/attachments/879785627862855700/1137268834357755955/1200px-PokC3A9_Ball_icon.png?width=398&height=397')
      .setFooter(`⟣Final: 22 de Septiembre⟢`, 'https://media.discordapp.net/attachments/879785627862855700/1137277693637959770/3652267.png?width=397&height=397')

client.channels.cache.get('875169407805030451').send(
  {
  content: '\<@&866206907810709544>',
  embeds: [embed]
    }
   )
  }
};