const Discord = require('discord.js');
const db = require('megadb')
const pico = new db.crearDB('pico')
const cana = new db.crearDB('cana')

module.exports = {
  name: "niveles inventario", 
  alias: ["niv"], 

async execute (client, message, args){

  const user = message.author || message.mentions.members.first()

  if(!pico.tiene(`${user.id}`)){
    pico.establecer(`${user.id}`, 0)
  }
  if(!cana.tiene(`${user.id}`)){
    caña.establecer(`${user.id}`, 0)
  }
  
  const mine = await pico.obtener(`${user.id}`)
  const fish = await cana.obtener(`${user.id}`)

  const embed1 = new Discord.MessageEmbed()

    .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({format: "png"}))
    .setDescription(`Nivel de objetos global`)
    .addField(`Nivel del pico:`, `${mine}`)
    .addField(`Nivel de la caña:`, `${fish}`)
    .setColor("RANDOM")
    .setFooter("Sistema de niveles de inventario de Lixsa", "https://media.discordapp.net/attachments/819889697844101130/830479802905264128/latest.png?width=837&height=473");

    message.channel.send({ embeds: [embed1] })

    return;

 }

}