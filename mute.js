const Discord = require('discord.js');
const db = require('megadb')
const muterol = new db.crearDB('muterol')
const ms = require('ms')

 module.exports = {
   name: "mute",
   alias: [],

 async execute(client, message, args) {

  var perms = message.member.permissions.has("MANAGE_ROLES")
  if(!perms) return message.reply({ content: "<:xx:925189718302408764>| Permisos faltantes: \n`MANAGE_ROLES`", allowedMentions: { repliedUser: false } })

  let time = args[1]
  if(!time) return message.reply({ content: "<:xx:925189718302408764>| Debes especificar el tiempo !", allowedMentions: { repliedUser: false } })
  let timer = ms(time)

  let mencionado = message.mentions.members.first()
  if(!mencionado) return message.reply({ content: "<:xx:925189718302408764>| Debes Mencionar a un usuario !", allowedMentions: { repliedUser: false } })

  var razon = args[2]
  if(!razon){
    razon = 'No especificado'
  }

  if(!muterol.tiene(message.guild.id)) return message.channel.send("Este servidor no tiene ningun rol para mutear")

  let rol = await muterol.obtener(message.guild.id)

  if(mencionado.roles.cache.has(rol)) return message.channel.send("Este usuario ya esta muteado")

  mencionado.roles.add(rol)

  const non = new Discord.MessageEmbed()
  .setTitle(`:loud_sound: Usuario no silenciado`)
  .setDescription(`El usuario **${mencionado}** ha sido des muteado`)
  .addField("Razón:", `${razon}`)
  .addField("Staff responsable:", `${message.author.tag}`)


  const mom = new Discord.MessageEmbed()
  .setTitle(`:mute: Usuario silenciado`)
  .setDescription(`El usuario ${mencionado} ha sido muteado durante **${time}**`)
  .addField("Razón:", `${razon}`)
  .addField("Tiempo:", `${time}`)
  .addField("Staff responsable:", `${message.author.tag}`)

  message.channel.send({ embeds: [mom] })

  await setTimeout(async function() {

    await mencionado.roles.remove(rol)

    await message.channel.send({ embeds: [non] }).catch(error => {
     message.channel.send(`Hubo un error inesperado ${error}`)
    })

  }, timer)

 
 }
}