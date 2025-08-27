const Discord = require('discord.js')

module.exports = {
  name: "infobot",
  alias: ["ibot"],
  
  async execute(client, message, args) {

  const embed = new Discord.MessageEmbed()
    .setColor(' BLUE')
    .setDescription(`Hola ${message.author}, Aqui esta mi informacion.:`)
    .addFields(
        {
            name: 'Servidores:',
            value: `Me encuentro en **${client.guilds.cache.size}** servidores.`,
            inline: false
        },
        {
            name: 'Usuarios:',
            value: `Mis usuarios **${client.users.cache.size}** usuarios.`,
            inline: false
        },
        {
            name: 'Mis desarolladores:',
            value: '**꧁Ӂ_MλX_ŁUłŞ_Ӂ꧂#1471**',
            inline: false
        },
    )
    message.channel.send({embeds: [embed] });
}
}