const Discord = require("discord.js");
module.exports =
{
    name: "roles",
    alias: ["rol"],
    
    execute(client, message, args,){

      const embed = new Discord.MessageEmbed()
    .setColor("#ff0004")
    .setTitle("⟣ Σ₊·・┈┈┈・ROLES・┈┈┈・₊· ͟͟͞꒰ ⟢")
    .setDescription("｡☆✼★━━━━━━━━━━━━━━━★✼☆｡ \n🇵🇦 |  Añade a tu perfil un rol \n🇺🇸 | Add a role to your profile \n｡☆✼★━━━━━━━━━━━━━━━★✼☆｡ \n\n ♥️ | CATEGORIES \n\n\n <:color:926990668520374322> | **COLORES** \nUse `ls!role-color` \n\n 🌸 | **NEKOTINA** \nUsar `ls!role-neko` \n\n<:anuncios:926990639357386813> | **NOTIFICATIONS** \nUse `ls!role-notifications`")
    .setThumbnail("https://images-ext-2.discordapp.net/external/pLtwiHdSGXBZFE057aLNsd0vS_GdujwFe62ImnZqrUA/%3Fsize%3D2048/https/cdn.discordapp.com/icons/754360617749577790/e61518278de5ebd5f595148551a346cb.png?width=422&height=422")


    message.channel.send({ embeds: [embed] });
    }
};