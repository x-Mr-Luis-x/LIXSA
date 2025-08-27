const Discord = require('discord.js');


module.exports = { 
  name: "serverinfo",
  alias: ["sinfo"],

  async execute(client, message, args) {

  const embed = new Discord.MessageEmbed()
        .setTimestamp()
        .setTitle("**Informacion del server**")
        .setColor('RED')
        .setThumbnail(`${message.guild.iconURL({ dynamic: true })}`)
        .addField(`Nombre del servidor:`, `**${message.guild.name}**`, true)
        .addField(`ID Del servidor`, `${message.guild.id}`, true)
        .addField(`Creador del servidor`, `${message.guild.owner}`, true)  
        .addField(`Region del servidor`, `${message.guild.region}`, true)
        .addField(`Numero de miembros`, `${message.guild.memberCount}`, true)
        .addField(`Emojis:`, `${message.guild.emojis.cache.size}`, true)
        .addField(`Total canales de texto:`, `${message.guild.channels.cache.filter(channel => channel.type === 'text').size}`, true)
        .addField(`Total canales de voz:`, `${message.guild.channels.cache.filter(channel => channel.type === 'voice').size}`, true)
        .addField(`Total cantidad de roles:`, `${message.guild.roles.cache.size}`, true)
        .setAuthor(`${message.guild.name}`)
        message.channel.send({ embeds: [embed] });  
    }
}