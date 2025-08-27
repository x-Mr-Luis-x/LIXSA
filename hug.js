const Discord = require('discord.js');
const db = require('megadb')
const hug = new db.crearDB('hug')

module.exports = {
  name: "hug", 
  alias: [],

execute (client, message, args){

  const user = message.author || message.mentions.members.first()

  let mentioned = message.mentions.users.first() 
  if(!mentioned) return message.reply({ content: "<:xx:925189718302408764> | Debes mencionar a alguien", allowedMentions: { repliedUser: false } })

  if (!hug.tiene(`${mentioned.id}`))
    hug.establecer(`${mentioned.id}`, 0)

  let random = Math.floor(Math.random() * 1) + 1

  hug.sumar(`${mentioned.id}`, random)

  let abrazo = ['https://acegif.com/wp-content/gif/anime-hug-38.gif', 'https://33.media.tumblr.com/37439bbddeee220a249dc64428707cab/tumblr_np8402rqkq1uo77uno1_r1_500.gif', 'https://i.pinimg.com/originals/bb/84/1f/bb841fad2c0e549c38d8ae15f4ef1209.gif', 'https://c.tenor.com/0rq19t8sqjMAAAAC/feliz-amor-abrazo.gif', 'https://i.pinimg.com/originals/51/2a/f3/512af31e377153959dbad5b888d22af1.gif', 'https://c.tenor.com/9e1aE_xBLCsAAAAC/anime-hug.gif', 'https://c.tenor.com/AO-1yttBeH8AAAAC/anime-hug.gif', 'https://c.tenor.com/XiAimMUe0zYAAAAC/anime-is-the-order-a-rabbit.gif', 'https://c.tenor.com/xhWYJa3S_oYAAAAC/anime-hug.gif', 'https://c.tenor.com/tBgv2g67Xn4AAAAC/anime-hug.gif', 'https://i.pinimg.com/originals/b5/1d/f1/b51df18c3a0ebe6ddff723cf3103e174.gif', 'https://i.gifer.com/EYM1.gif', 'https://i.gifer.com/APS3.gif', 'http://pa1.narvii.com/6299/6af3b32ea0eb0de8f1ec89cdb410d81430e2474a_00.gif', 'https://acegif.com/wp-content/uploads/anime-love-11.gif', 'https://www.gratistodo.com/wp-content/uploads/2021/12/Anime-gifs-de-Amor-2.gif', 'https://64.media.tumblr.com/b894962de94fcd2ecff43994eb7fa212/ece824bcdea757e1-11/s400x600/6edbb4cb9b85ffb0542ff71dceadf55c6a95ceb3.gif', 'https://i.imgur.com/v07ICwl.gif', 'https://thumbs.gfycat.com/FamiliarExhaustedHatchetfish-max-1mb.gif', 'https://i.gifer.com/YW.gif', 'https://c.tenor.com/DVOTqLcB2jUAAAAC/anime-hug-love.gif']
  

  var abrazos = abrazo[Math.floor(Math.random() * (abrazo.length))]


  const embed = new Discord.MessageEmbed()
      .setDescription(`**${user.username}** abrazó a **${mentioned.username}** con amor uwu`)
      .setColor('RANDOM')
      .setImage(abrazos)

    message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

    return;


 }

}