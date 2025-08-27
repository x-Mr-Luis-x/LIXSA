const Discord = require('discord.js');

module.exports = {
  name: "concursantexdxdxdxd", 
  alias: [], 
  
execute(client, message, args) {

  const user = message.mentions.users.first() || message.author;

  
    const embeddib = new Discord.MessageEmbed()
    .setColor('#4af13f')
    .setAuthor('🐊allyn☆n!', 'https://cdn.discordapp.com/avatars/813426907001520209/c67c846e557de4190757b6c80b7d5485.png')
    .setDescription('🎨 | Dibujo de <@813426907001520209>')
    .setImage('https://media.discordapp.net/attachments/897962933919838249/932636460186738708/508_sin_titulo_20220117001329.png')
    .setFooter(`Concursante #1`, 'https://cdn.discordapp.com/avatars/813426907001520209/c67c846e557de4190757b6c80b7d5485.png')

    client.channels.cache.get('928428977872326726').send({ embeds: [embeddib] }).then((msg) =>{
        msg.react('<:giftbox:909897833107308594>');
    });

    const embeddib2 = new Discord.MessageEmbed()
    .setColor('#73b6f1')
    .setAuthor('ᴀᴠɪ ღ・ᴴᴬˇツ', 'https://cdn.discordapp.com/avatars/765996087076978699/ef7027a87ded4b3fbcbfd30d334e7e50.png')
    .setDescription('🎨 | Dibujo de <@765996087076978699>')
    .setImage('https://media.discordapp.net/attachments/892449579969167410/929110568990834698/259_sin_titulo_20220107125637.png')
    .setFooter(`Concursante #2`, 'https://cdn.discordapp.com/avatars/765996087076978699/ef7027a87ded4b3fbcbfd30d334e7e50.png')

    client.channels.cache.get('928428977872326726').send({ embeds: [embeddib2] }).then((msg) =>{
        msg.react('<:giftbox:909897833107308594>');
    });
  
  const embeddib3 = new Discord.MessageEmbed()
    .setColor('#c066ee')
    .setAuthor('꧁Ӂ_MλX_ŁUłŞ_Ӂ꧂', 'https://cdn.discordapp.com/avatars/753630059335647244/d6b32b2067265ac852c238bea02528cb.png')
    .setDescription('🎨 | Dibujo de <@753630059335647244>')
    .setImage('https://media.discordapp.net/attachments/844680428007063662/936717960498778193/800dfc37ce6d031c1c89fde6cbb3799cfeeae223r1-1536-2048v2_uhq.png')
    .setFooter(`Concursante #3`, 'https://cdn.discordapp.com/avatars/753630059335647244/d6b32b2067265ac852c238bea02528cb.png')

    client.channels.cache.get('928428977872326726').send({ embeds: [embeddib3] }).then((msg) =>{
        msg.react('<:giftbox:909897833107308594>');
    });

    const embeddib4 = new Discord.MessageEmbed()
    .setColor('#9cd64b')
    .setAuthor('gretell.com', 'https://cdn.discordapp.com/avatars/813241199221145600/f96a7044509ab56f236987f33ba7f4f1.png')
    .setDescription('🎨 | Dibujo de <@813241199221145600>')
    .setImage('https://media.discordapp.net/attachments/844680428007063662/936718077033316453/20220119_194837.jpg')
    .setFooter(`Concursante #4`, 'https://cdn.discordapp.com/avatars/813241199221145600/f96a7044509ab56f236987f33ba7f4f1.png')

    client.channels.cache.get('928428977872326726').send({ embeds: [embeddib4] }).then((msg) =>{
        msg.react('<:giftbox:909897833107308594>');
    });
}
}