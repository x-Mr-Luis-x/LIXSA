const Discord = require('discord.js');
const db = require('megadb')
const levels_db = new db.crearDB('niveles');

module.exports = {
  name: "levesssl",
  alias: [],


async execute (client, message, args){

  if(!levels_db.tiene(`${message.guild.id}`)) return message.channel.send(`Este servidor no tiene ningún usuario en el ranking, ¡se el primero!`)

  let user = message.mentions.users.first() || message.author;

  if(!levels_db.tiene(`${message.guild.id}.${user.id}`)) return message.channel.send(`Este usuario no tiene nivel ni xp... Qué inactivo... "-.-`)

  let { xp, nivel } = await levels_db.obtener(`${message.guild.id}.${user.id}`)
    let levelup = 5 * (nivel ** 2) + 50 * nivel + 100
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setThumbnail(message.author.displayAvatarURL())
    .setTitle(`${user.tag}`)
    .addField(`XP:`, `${xp}/${levelup}`)
    .addField(`Nivel:`, `${nivel}`)
    return message.channel.send({ embeds: [embed] })
}
}


