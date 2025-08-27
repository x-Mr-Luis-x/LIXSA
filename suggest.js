const Discord = require('discord.js');
const db = require('megadb')
const canalsug = new db.crearDB('canalsug')

module.exports = {
  name: "suggestion", 
  alias: ["suggest"], 

async execute (client, message, args){

  const user = message.author;

  let suger = args.join(" ");

        if(!canalsug.tiene(`${message.guild.id}`)) return message.channel.send("No has establecido el canal de sugerencias")
        
        if(!suger) return message.channel.send("¿Y la sugerencia?")
        
        const canal = await canalsug.obtener(`${message.guild.id}` , `${message.channel.id}`)
        const canalfinal = client.channels.cache.get(canal)

     message.channel.send(`Gracias ${user} por su sugerencia`)

    const embedsug = new Discord.MessageEmbed()
    .setColor('#bae4ee')
    .setAuthor(user.tag, user.displayAvatarURL())
    .setDescription(`**NUEVA SUGERENCIA:** \n\n${suger}`)
    .setThumbnail(`https://images-ext-2.discordapp.net/external/pLtwiHdSGXBZFE057aLNsd0vS_GdujwFe62ImnZqrUA/%3Fsize%3D2048/https/cdn.discordapp.com/icons/754360617749577790/e61518278de5ebd5f595148551a346cb.png`)
    .setFooter(`Sugerencias para ${message.guild.name}`)

    canalfinal.send({ embeds: [embedsug] }).then((msg) =>{
        msg.react('<:vf:925189693300154399>');
        msg.react('<:xx:925189718302408764> ');
        message.delete();
    }).catch((err)=>{
        throw err;
    });
  
  
}
}