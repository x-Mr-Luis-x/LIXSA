const Discord = require('discord.js');
const db = require('megadb')
const channel = new db.crearDB('canalsug')

module.exports = {
  name: "setsuggest", 
  alias: [""], 

async execute (client, message, args){
  if (!message.member.permissions.has('MANAGE_CHANNELS')) return message.channel.send("Necesitas permisos")

     const canalestablecer = message.mentions.channels.first()
     if(!canalestablecer) return message.channel.send("Menciona el canal donde se mandaran las sugerencias")

     message.channel.send(`El canal ${canalestablecer} se ha establecido como el canal de sugerencias`)

     channel.establecer(`${message.guild.id}` , `${canalestablecer.id}`)

  
  
}
}