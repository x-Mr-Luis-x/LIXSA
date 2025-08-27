const Discord = require("discord.js");

module.exports = {
  name: "role-notifications",
  alias: ["role-noti"],
  
  async execute (client, message, args, prefix) {
    
    const embed = new Discord.MessageEmbed()
    .setTitle("⟣<:anuncios:926990639357386813>Σ₊·・┈┈・NOTIFICATIONS・┈┈・₊· ͟͟͞꒰<:anuncios:926990639357386813>⟢")
    .setDescription("｡☆✼★━━━━━━━━━━━━━━━★✼☆｡ \n🇵🇦 |  Enterate de las últimas noticias!! <:anuncios:926990639357386813>\n🇺🇸 | Find out about the latest news!! <:anuncios:926990639357386813>\n｡☆✼★━━━━━━━━━━━━━━━★✼☆｡ \n\nΣ📢 ͟͟͞꒰₊· |<@&884574014863998996> \nΣ🌸 ͟͟͞꒰₊· |<@&842666836587708417> \nΣ💖 ͟͟͞꒰₊· |<@&842666052588273666> \nΣ🎁 ͟͟͞꒰₊· |<@&866206907810709544>")
    .setThumbnail('https://media.discordapp.net/attachments/923453900571435053/927720133068214322/anuncios.png?width=422&height=422')
    .setColor('#00f8ff')
    
    const row = new Discord.MessageActionRow()
    .addComponents(
      new Discord.MessageSelectMenu()
      .setCustomId('notifiroles')
      .setPlaceholder('📢 | NOTIFICATIONS')
      .addOptions([
        {
          label: '❝announcements❞',
          description: "notify announcements",
          value: 'anuncio',
          emoji: "📢"
        },
        {
          label: '❝nekotina❞',
          description: "notifica noticias de nekotina",
          value: 'nekotina',
          emoji: "🌸"
        },
        {
          label: '❝pollux❞',
          description: "notifica noticias de pollux",
          value: 'pollux',
          emoji: "💖"
        },
        {
          label: '❝eventos❞',
          description: "notifica eventos",
          value: 'evento',
          emoji: "🎁"
        },
        ]),
      );
      await message.channel.send({ embeds: [embed], components: [row] });
  }
}