const Discord = require('discord.js');
const express = require('express');
const fs = require('fs');
const db = require('megadb');
const app = express();
const port = 3000;
const levels_db = new db.crearDB('niveles');

module.exports = {

nivelesFunc: async (client, message, args) => {
if(message.content.lenght <= 3) return;

  if(!levels_db.tiene(message.guild.id)) levels_db.establecer(message.guild.id, {})
  if(!levels_db.tiene(`${message.guild.id}.${message.author.id}`)) levels_db.establecer(`${message.guild.id}.${message.author.id}`, {xp: 0, nivel: 1})
  let { xp, nivel } = await levels_db.obtener(`${message.guild.id}.${message.author.id}`)
  let randomxp = Math.floor(Math.random() * 30) +1
  let levelup = 5 * (nivel ** 2) + 50 * nivel + 100

  if((xp + randomxp) >= levelup) {
    levels_db.establecer(`${message.guild.id}.${message.author.id}`, {xp: 0, nivel: parseInt(nivel+1)})
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setThumbnail(message.author.displayAvatarURL())
    .setDescription(`¡${message.member}, acabas de subir al nivel ${parseInt(nivel+1)}!`)
    return message.channel.send({ embeds: [embed] })
  }
  else{
    levels_db.sumar(`${message.guild.id}.${message.author.id}.xp`, randomxp)
    message.channel.send(`${message.author.tag}, ganaste ${randomxp} de XP`)
    return;
  }

 }

}