const Discord = require("discord.js");

module.exports = {
  name: "role-neko",
  alias: ["role-neko"],
  
  async execute (client, message, args, prefix) {
    
    const embed = new Discord.MessageEmbed()
    .setTitle("⟣<:neko:926994245439598612>Σ₊·・┈┈┈・NEKO・┈┈┈・₊· ͟͟͞꒰<:neko:926994245439598612>⟢")
    .setDescription("｡☆✼★━━━━━━━━━━━━━━━★✼☆｡ \n🌸 | Añade un rol de eventos de Nekotina <:neko:926994245439598612>\n｡☆✼★━━━━━━━━━━━━━━━★✼☆｡\n\n💮 | **EVENTOS:** \nΣ🎉 ͟͟͞꒰₊· |<@&893969115994267658> \nΣ🎊 ͟͟͞꒰₊· |<@&892965208358780949> \n\n 🌸 | **ESPECIALES:** \nΣ🌺 ͟͟͞꒰₊· |<@&892965734219673610> \nΣ🏵️ ͟͟͞꒰₊· |<@&773028058306576392> \nΣ🌸 ͟͟͞꒰₊· |<@&773059858646827051>")
    .setThumbnail('https://media.discordapp.net/attachments/923453900571435053/927720132854313000/neko.png?width=422&height=422')
    .setColor('#ff1fbe')
    
    const row = new Discord.MessageActionRow()
    .addComponents(
      new Discord.MessageSelectMenu()
      .setCustomId('nekoroles')
      .setPlaceholder('🌸 | NEKOTINA')
      .addOptions([
        {
          label: '┊❝sorteo❞',
          description: "notifica sorteos",
          value: 'sorteo',
          emoji: "🎉"
        },
        {
          label: '┊❝rifa❞',
          description: "notifica rifas",
          value: 'rifa',
          emoji: "🎊"
        },
        ]),
      );
      await message.channel.send({ embeds: [embed], components: [row] });
  }
}