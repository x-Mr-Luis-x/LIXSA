const Discord = require('discord.js');
const db = require('megadb')
const pat = new db.crearDB('pats')

module.exports = {
  name: "pat", 
  alias: [],

execute (client, message, args){

  const user = message.author || message.mentions.members.first()

  let mentioned = message.mentions.users.first() 
  if(!mentioned) return message.reply({ content: "<:xx:925189718302408764> | Debes mencionar a alguien", allowedMentions: { repliedUser: false } })

  if (!pat.tiene(`${mentioned.id}`))
    pat.establecer(`${mentioned.id}`, 0)

  let random = Math.floor(Math.random() * 1) + 1

  pat.sumar(`${mentioned.id}`, random)

  let caricia = ['https://c.tenor.com/juz5uR4pJeEAAAAC/pat-anime.gif', 'https://c.tenor.com/68Eb6wgF5rcAAAAC/anime-pat.gif', 'https://c.tenor.com/0CNFPLHbiQ4AAAAC/loli-pat.gif', 'https://c.tenor.com/wLqFGYigJuIAAAAC/mai-sakurajima.gif', 'https://c.tenor.com/AnxesEqY2RwAAAAC/pat-anime.gif', 'https://c.tenor.com/N41zKEDABuUAAAAC/anime-head-pat-anime-pat.gif', 'https://c.tenor.com/x-3JQ2RA0WoAAAAC/anime-anime-headpat.gif', 'https://c.tenor.com/Fxku5ndWrN8AAAAC/head-pat-anime.gif', 'https://i.pinimg.com/originals/8b/42/6c/8b426c9bedc37054cd7e73925fa10da5.gif', 'https://c.tenor.com/Av63tpT8Y14AAAAC/pat-head.gif']
  

  var caricias = caricia[Math.floor(Math.random() * (caricia.length))]


  const embed = new Discord.MessageEmbed()
      .setDescription(`**${user.username}** acarició a **${mentioned.username}** con amor ~w~`)
      .setColor('RANDOM')
      .setImage(caricias)


    message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

    return;
 }

}