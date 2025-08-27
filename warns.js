const Discord = require('discord.js');
const db = require('megadb')
const warns = new db.crearDB('warns')

module.exports = {
  name: "warns", 
  alias: ["avisos"], 

async execute (client, message, args){

  let permiso = message.member.permissions.has("KICK_MEMBERS")
      if(!permiso) return message.channel.send("No tienes suficientes permisos")

  let persona = message.mentions.members.first()
  if(!persona) return message.channel.send("Debes mencionar a alguien")

  let cantidad = await warns.obtener(`${message.guild.id}.${persona.id}`)

  if(!warns.tiene(`${message.guild.id}.${persona.id}`)){
    message.channel.send("Esa persona no tiene warns!")

    return;
  }

  message.channel.send(`${persona} tiene **${cantidad}** warns`)
if(message.deletable) message.delete()
 }

} 