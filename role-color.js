const Discord = require("discord.js");

module.exports = {
  name: "role-color",
  alias: ["role-c"],
  
  async execute (client, message, args, prefix) {
    
    const embed = new Discord.MessageEmbed()
    .setTitle("⟣<:color:926990668520374322>Σ₊·・┈┈┈・COLOR・┈┈┈・₊· ͟͟͞꒰<:color:926990668520374322>⟢")
    .setDescription("｡☆✼★━━━━━━━━━━━━━━━★✼☆｡ \n🇵🇦 |  Añade a tu perfil un color <:color:926990668520374322>\n🇺🇸 | Add a color to your profile <:color:926990668520374322> \n｡☆✼★━━━━━━━━━━━━━━━★✼☆｡\n\n Σ<:color:926990668520374322> ͟͟͞꒰₊· | <@&773006660507664406> \nΣ<:color:926990668520374322> ͟͞꒰₊· | <@&773004626097340436> \nΣ<:color:926990668520374322> ͟͟͞꒰₊· | <@&773004621277954048> \nΣ<:color:926990668520374322> ͟͟͞꒰₊· | <@&773004623287943199> \nΣ<:color:926990668520374322> ͟͟͞꒰₊· | <@&772971809225834498> \nΣ<:color:926990668520374322> ͟͟͞꒰₊· | <@&784246969441845248> \nΣ<:color:926990668520374322> ͟͟͞꒰₊· | <@&784247696432037890> \nΣ<:color:926990668520374322> ͟͟͞꒰₊· | <@&784247218894143538> \nΣ<:color:926990668520374322> ͟͟͞꒰₊· | <@&773004620217057290> \nΣ<:color:926990668520374322> ͟͟͞꒰₊· | <@&773006149556764704> ")
    .setThumbnail("https://media.discordapp.net/attachments/923453900571435053/926994050924572703/color.png?width=422&height=422")
    .setColor("#ffffff")

    
    const row = new Discord.MessageActionRow()
    .addComponents(
      new Discord.MessageSelectMenu()
      .setCustomId('colorroles')
      .setPlaceholder('🎨 | COLORES')
      .addOptions([
        {
          label: '・ପ ROJO ੭❜๑',
          description: "click to add/remove color",
          value: 'rojo',
          emoji: "<:color:926990668520374322>"
        },
        {
          label: '・ପ AZUL ੭❜๑',
          description: "click to add/remove color",
          value: 'azul',
          emoji: "<:color:926990668520374322>"
        },
        {
          label: '・ପ ROSADO ੭❜๑',
          description: "click to add/remove color",
          value: 'rosado',
          emoji: "<:color:926990668520374322>"
        },
        {
          label: '・ପ NARANJA ੭❜๑',
          description: "click to add/remove color",
          value: 'naranja',
          emoji: "<:color:926990668520374322>"
        },
        {
          label: '・ପ AMARILLO ੭❜๑',
          description: "click to add/remove color",
          value: 'amarillo',
          emoji: "<:color:926990668520374322>"
        },
        {
          label: '・ପ NEGRO ੭❜๑',
          description: "click to add/remove color",
          value: 'negro',
          emoji: "<:color:926990668520374322>"
        },
        {
          label: '・ପ VERDE ੭❜๑',
          description: "click to add/remove color",
          value: 'verde',
          emoji: "<:color:926990668520374322>"
        },
        {
          label: '・ପ BLANCO ੭❜๑',
          description: "click to add/remove color",
          value: 'blanco',
          emoji: "<:color:926990668520374322>"
        },
        {
          label: '・ପ PURPURA ੭❜๑',
          description: "click to add/remove color",
          value: 'purpura',
          emoji: "<:color:926990668520374322>"
        },
        {
          label: '・ପ CELESTE ੭❜๑',
          description: "click to add/remove color",
          value: 'celeste',
          emoji: "<:color:926990668520374322>"
        },
        ]),
      );
      await message.channel.send({ embeds: [embed], components: [row] });
  }
}