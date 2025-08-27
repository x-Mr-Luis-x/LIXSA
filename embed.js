const Discord = require("discord.js")

let red = "#F04A47"
let green = "#43B581"
let yellow = "#FFFF00"

module.exports = {
 name: "embedcreate",
 alias: ["ec"],
 
async execute(client, message, args) {

  let permiso = message.member.permissions.has("MANAGE_MESSAGES")
  if(!permiso) return message.channel.send("PERMISOS FALTANTES: \n`GESTIONAR MENSAJES :|`")

    let check = client.emojis.cache.get("886812691262496850");
    let cross = client.emojis.cache.get("886812692000686140");
    let warn = client.emojis.cache.get("890917122337833000");
    let anicheck = client.emojis.cache.get("891905892944060446");

try {
  


const simplydjs = require('simply-djs')


simplydjs.embedCreate(message)
 
 } catch (err) {
   console.log(err)
   const embed = new MessageEmbed()
   .setDescription(`**${warn} Sorry, an error occured while processing**`)
   .setColor(yellow)
   return message.channel.send({ embeds: [embed] })
 }
 }
}