const Discord = require('discord.js');
const db = require('megadb')
const warns = new db.crearDB('warns')

module.exports = {
  name: "warn", 
  alias: ["avisar"], 

execute (client, message, args){

  var perms = message.member.permissions.has("KICK_MEMBERS")
  if(!perms) return message.channel.send("No tienes suficientes permisos crack!")
  
  let persona =message.mentions.users.first()
  if(!persona) return message.channel.send("Debes mencionar a alguien")

  var razon = args.slice(1).join(" ")
  if(!razon){
    razon = 'No especificado'
  }

  if(!warns.tiene(`${message.guild.id}.${persona.id}`))
  warns.establecer(`${message.guild.id}.${persona.id}`, 0)

  warns.sumar(`${message.guild.id}.${persona.id}`, 1)

  message.channel.send(`El moderador **${message.author.tag}** aviso a **${persona.tag}** por **${razon}**`)

  message.channel.send(`Te han avisado en el servidor **${message.guild.name}** por **${razon}**`)
  if(message.deletable) message.delete()
 }

} 