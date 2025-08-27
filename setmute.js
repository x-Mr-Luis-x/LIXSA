const Discord = require('discord.js');
const db = require('megadb')
const muterol = new db.crearDB('muterol')

 module.exports = {
   name: "setmuterol",
   alias: ["smr"],
   
 async execute(client, message, args) {

  var perms = message.member.permissions.has("MANAGE_CHANNELS")
  if(!perms) return message.reply({ content: "<:xx:925189718302408764>| Permisos faltantes: \n`MANAGE_CHANNELS`", allowedMentions: { repliedUser: false } })

  let rol = message.mentions.roles.first();
  if(!rol) return message.reply({ content: "<:xx:925189718302408764>| Debes mencionar un rol !", allowedMentions: { repliedUser: false } })

  muterol.establecer(message.guild.id, rol.id)

  message.channel.send(`Se ha establecido el rol **${rol.name}** como el rol para mutear`)

 
 }
} 