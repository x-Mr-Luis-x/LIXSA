const Discord = require('discord.js');
const ms = require('ms');

module.exports = {
    name: "giveaway.start",
    alias: ["g.start"],
async execute(client, message, args) {

if (!message.member.permissions.has('MANAGE_MESSAGES')) return message.channel.send('Necesitas permisos')

let time = args[0]

if (!time) return message.channel.send('Especifica un tiempo')

if (
   !args[0].endsWith('d') &&
   !args[0].endsWith('h') &&
   !args[0].endsWith('m') &&
   !args[0].endsWith('s') 
)
   return message.channel.send("Pon una duración válida.")


let gchannel = message.mentions.channels.first()
if (!gchannel) return message.channel.send('Menciona un canal')


let prize = args.slice(2).join(" ");
if (!prize) return message.channel.send("Pon lo que quieras sortear")

message.delete()
const embed = new Discord.MessageEmbed()
.setTitle('GIVEAWAY')
.setDescription(`React to :tada: to enter giveaway \nHosted by: **${message.author}** \nTime: **${time}** \nPrize: **${prize}**`)
.setTimestamp(Date.now() + ms(args[0]))
.setColor('#f1d53c')
let n = await gchannel.send({ embeds: [embed] })
        
n.react('🎉')
setTimeout(() => {
   if (n.reactions.cache.get('🎉').count < 1) {
     return message.channel.send('no entraron personas al sorteo F')
     }

     let winner = n.reactions.cache.get('🎉').users.cache.filter((u) => !u.bot).random()
     gchannel.send(`Congratulations **${winner}**, you won **${prize}**`)
}, ms(args[0]))




}
}