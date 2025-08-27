const Discord = require('discord.js');
const db = require('megadb')
const afk = new db.crearDB('afk')

module.exports =  {
  name: "afk",
  alias: [],
  async execute(client, message, args) {

  const user = message.author

  let reason = args.join(' ')
  if(!reason) {
    let embedNoReason = new Discord.MessageEmbed()
    .setTitle(`${user.username} **AFK establecido**`)
    .setDescription(`**Motivo:** No especificada`)
    .setFooter(`Avisaré a quienes te mencionen.`)
    .setThumbnail(message.author.displayAvatarURL())
    .setColor('RANDOM')
  message.reply({ embeds: [embedNoReason], allowedMentions: { repliedUser: false } })
  afk.establecer(`${message.guild.id}.${user.id}`, { afk: 'true', reason: 'No especificado' })
  } else {
    let embedReason = new Discord.MessageEmbed()
    .setTitle(`${user.username}
**AFK establecido**`)
    .setDescription(`**Motivo:** ${reason}`)
    .setFooter(`Avisaré a quienes te mencionen.`)
    .setThumbnail(message.author.displayAvatarURL())
    .setColor('RANDOM')
message.reply({ embeds: [embedReason], allowedMentions: { repliedUser: false } })
afk.establecer(`${message.guild.id}.${user.id}`, { afk: 'true', reason: reason })

   }
  }
}