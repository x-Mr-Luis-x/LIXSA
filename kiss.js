const Discord = require('discord.js');
const db = require('megadb')
const kiss = new db.crearDB('kiss')

module.exports = {
  name: "kiss", 
  alias: [],

execute (client, message, args){

  const user = message.author || message.mentions.members.first()

  let mentioned = message.mentions.users.first() 
  if(!mentioned) return message.reply({ content: "<:xx:925189718302408764> | Debes mencionar a alguien", allowedMentions: { repliedUser: false } })

  if (!kiss.tiene(`${mentioned.id}`))
    kiss.establecer(`${mentioned.id}`, 0)

  let random = Math.floor(Math.random() * 1) + 1

  kiss.sumar(`${mentioned.id}`, random)

  let beso = ['https://i.pinimg.com/originals/47/64/b6/4764b6fe128904738b443f7d635b2a99.gif', 'https://aniyuki.com/wp-content/uploads/2021/07/aniyuki-anime-gif-kiss-15.gif', 'https://pa1.narvii.com/6233/af64bc4585a102d9b827f846fa08f716c4341d4d_hq.gif', 'https://c.tenor.com/Zq7rvNtdXLQAAAAC/zero-two-and-hiro-anime.gif', 'https://c.tenor.com/uEIDcRqIxzMAAAAC/anime-kiss.gif', 'https://c.tenor.com/TcLPLJrXlU8AAAAC/anime-kiss.gif', 'https://c.tenor.com/QJJefWEsBT4AAAAC/kiss-kissing.gif', 'https://c.tenor.com/tRSq006tGDsAAAAd/anime-kiss.gif', 'https://c.tenor.com/WijnhV9LiWAAAAAC/anime-kiss.gif', 'https://pa1.narvii.com/6413/62dd265253108ba17d614f37e4f7ab26ac793e03_hq.gif', 'https://c.tenor.com/W571AcafidcAAAAC/anime-kissing.gif', 'https://c.tenor.com/RdCpWpNs8kEAAAAC/anime-kissing.gif', 'https://c.tenor.com/gYIe0Bpa9SYAAAAC/anime-say-i-love-you.gif', 'https://c.tenor.com/Ct9yIxN5nE0AAAAC/kiss-anime.gif', 'https://i.pinimg.com/originals/ad/6d/89/ad6d89330318be5f8b152f4741039648.gif', 'https://64.media.tumblr.com/e32206d2d51424eeb3c017c1ef0e80ad/fbe2f7e1b2143d0b-6a/s500x750/0280bd77e01a03bac8994f7a3c1aafa267abad0a.gif', 'https://c.tenor.com/3cVq--9mmtoAAAAC/anime-kiss.gif', 'https://pa1.narvii.com/6492/6875296b850bea4380e87dd0601d44c9ec0d70f8_hq.gif', 'https://c.tenor.com/SZUxOrwuypgAAAAd/beso-kiss.gif', 'http://pa1.narvii.com/6115/d956e6cdfcb94780993afc12a7be993cf6160ea5_00.gif']
  

  var besos = beso[Math.floor(Math.random() * (beso.length))]


  const embed = new Discord.MessageEmbed()
    .setDescription(`**${user.username}** besó a **${mentioned.username}** con mucho amor o///o`)
    .setColor('RANDOM')
    .setImage(besos)

   message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

    return;
 }
}