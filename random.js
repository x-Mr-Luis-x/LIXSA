const Discord = require("discord.js");
module.exports =
{
    name: "randomxd",
    aliases: [],
    execute(client, message, args){

    const user = message.mentions.users.first() || message.author;

    let zona1 = [`**${user}** \n\nHas minado en **CUEVA** y has encontrado: \n<:diamante:925189523397287967> **Diamante** (x100) \n\n<:pico:925189526798876743> **Pica** (x1}) gastada`, `**${user}** \n\nHas minado en **CUEVA** y has encontrado: \n<:diamante:925189523397287967> **Diamante** (x1000)`, `**${user}** \n\nHas minado en **CUEVA** y has encontrado: \n<:diamante:925189523397287967> **Diamante** (x1000)`, `**${user}** \n\nHas minado en **CUEVA** y has encontrado: \n<:diamante:925189523397287967> **Diamante** (x100`, `**${user}** \n\nHas minado en **CUEVA** y has encontrado: \n<:diamante:925189523397287967> **Diamante** (x10)`, `**${user}** \n\nHas minado en **CUEVA** y has encontrado: \n<:diamante:925189523397287967> **Diamante** (x10)`, `**${user}** \n\nHas minado en **CUEVA** y has encontrado: \n<:diamante:925189523397287967> **Diamante** (x10)`, `**${user}** \n\nHas minado en **CUEVA** y has encontrado: \n<:diamante:925189523397287967> **Diamante** (x10)`, `**${user}** \n\nHas minado en **CUEVA** y has encontrado: \n<:diamante:925189523397287967> **Diamante** (x10)`, `**${user}** \n\nHas minado en **CUEVA** y has encontrado: \n<:diamante:925189523397287967> **Diamante** (x10)`, `**${user}** \n\nHas minado en **CUEVA** y has encontrado: \n<:diamante:925189523397287967> **Diamante** (x10) \n\n **Extra**: \n <:box:925189489557651507> Cajita (x1)`]

    var mineria = zona1[Math.floor(Math.random() * (zona1.length))]

    const embed = new Discord.MessageEmbed()



  .setTitle("➜ | CUEVA <:pico:925189526798876743>")
  .setDescription(mineria)
  .setThumbnail("https://i.pinimg.com/originals/ce/7a/e6/ce7ae6251733e16e526fd5f0b4cb7a47.gif")
  .setColor("#1d64a3")

message.channel.send({ embeds: [embed] });
  }
};