const Discord = require('discord.js');
const db = require('megadb')
const hug = new db.crearDB('hug')
const kiss = new db.crearDB('kiss')
const pat = new db.crearDB('pats')
const pico = new db.crearDB('pico')
const cana = new db.crearDB('cana')
const diamante = new db.crearDB('diamante');
const diamanterosa = new db.crearDB('diamanterosa')
const esmeralda = new db.crearDB('esmeralda')
const gemamikzu = new db.crearDB('gemamikzu')
const diamondlixsa = new db.crearDB('diamondlixsa')
const levels_db = new db.crearDB('niveles')
const cofre = new db.crearDB('cofre')


module.exports = {
  name: "profile", 
  alias: ["perfil"],

async execute (client, message, args){

  const user = message.author || message.mentions.members.first()

  if (!hug.tiene(`${user.id}`)){
    hug.establecer(`${user.id}`, 0)
  }
  if (!kiss.tiene(`${user.id}`)){
    kiss.establecer(`${user.id}`, 0)
  }
  if (!pat.tiene(`${user.id}`)){
    pat.establecer(`${user.id}`, 0)
  }
  if (!pico.tiene(`${user.id}`)){
    pico.establecer(`${user.id}`, 0)
  }
  if (!cana.tiene(`${user.id}`)){
    cana.establecer(`${user.id}`, 0)
  }
  if (!diamante.tiene(`${user.id}`)){
  diamante.establecer(`${user.id}`, 0)
  }
  if (!diamanterosa.tiene(`${user.id}`)){
  diamanterosa.establecer(`${user.id}`, 0)
  }
  if (!esmeralda.tiene(`${user.id}`)){
  esmeralda.establecer(`${user.id}`, 0)
  }
  if (!gemamikzu.tiene(`${user.id}`)){
  gemamikzu.establecer(`${user.id}`, 0)
  }
  if (!diamondlixsa.tiene(`${user.id}`)){
  diamondlixsa.establecer(`${user.id}`, 0)
  }
  if (!cofre.tiene(`${user.id}`)){
  cofre.establecer(`${user.id}`, 0)
  }

  let { xp, nivel } = await levels_db.obtener(`${message.guild.id}.${user.id}`)
  let levelup = 5 * (nivel ** 2) + 50 * nivel + 100

  const cofreT = await cofre.obtener(`${user.id}`);
  const caricia = await pat.obtener(`${user.id}`);
  const beso = await kiss.obtener(`${user.id}`);
  const abrazo = await hug.obtener(`${user.id}`);
  const mine = await pico.obtener(`${user.id}`);
  const fish = await cana.obtener(`${user.id}`);
  const diamanteT = await diamante.obtener(`${user.id}`);
  const diamanteRosaT = await diamanterosa.obtener(`${user.id}`);
  const esmeraldaT = await esmeralda.obtener(`${user.id}`);
  const gemamikzuT = await gemamikzu.obtener(`${user.id}`);
  const diamondlixsaT = await diamondlixsa.obtener(`${user.id}`);

  const embed1 = new Discord.MessageEmbed()

    .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({format: "png"}))
    .setDescription(`\n<a:flecha_lixsa:910560844893544498> | **NIVEL**: ${nivel} **XP:** ${xp}/${levelup} \n\n <a:flecha_lixsa:910560844893544498> | **GEMAS:** \n<:diamante:925189523397287967> **Diamante:** (x${cofreT})\n <:diamanterosa:925189506628468837> **Diamante Rosa:** (x${diamanteRosaT}) \n\<:esmeralda:925189523447611443> **Esmeralda :** (x${esmeraldaT}) \n\<:gema_mikzu:925189528598237254> **Gema Mikzu :** (x${gemamikzuT}) \n\<:lixsa_diamond:925189859893715005> **Diamante Lixsa :** (x${diamondlixsaT})\n\n <a:flecha_lixsa:910560844893544498> | **INTERACCIÓN :**\n\<:amor:930733245077811280> **Caricias:** ${caricia}\n\<:amor:930733245077811280> **Besos:** ${beso}\n\<:amor:930733245077811280> **Abrazos:** ${abrazo}\n\n<a:flecha_lixsa:910560844893544498> | **WAIFUS:**\n <:LIXSA:930734528308326420> \<:MIKZU:930734550064197702>`)
    .setThumbnail(`${message.member.displayAvatarURL()}`)
    .setColor("#10dfff")

    message.reply({ embeds: [embed1], allowedMentions: { repliedUser: false } })
  

    return;
 }
}
