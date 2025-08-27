const Discord = require('discord.js');
const db = require('megadb');
const diamante = new db.crearDB('diamante');
const cofre = new db.crearDB('cofre');

module.exports = {
	name: 'balance',
	alias: ['bal'],

async execute (client, message, args) {

const usuario = message.mentions.users.first() || message.author;
	
if(!diamante.tiene(usuario.id)){
	diamante.establecer(usuario.id, 0)
}

if(!cofre.tiene(usuario.id)){
 cofre.establecer(usuario.id, 0)
}

const cofreT = await cofre.obtener(usuario.id);
	
const diamanteT = await diamante.obtener(usuario.id);

const total = parseInt(diamanteT) + parseInt(cofreT);

	const embed = new Discord.MessageEmbed()
	.setAuthor(usuario.tag, usuario.displayAvatarURL())
	.addField("<a:flecha_lixsa:910560844893544498> | GEMAS:", `<:diamante:925189523397287967> **Diamante** (x${diamanteT})`)
.addField("<a:flecha_lixsa:910560844893544498> | COFRE:", `<:diamante:925189523397287967> **Diamante** (x${cofreT})`)
.addField("<a:flecha_lixsa:910560844893544498> | TOTAL:", `<:diamante:925189523397287967> **Diamante** (x${total})`)
.setThumbnail("https://media.discordapp.net/attachments/923453900571435053/925189096849174528/diamante.png?width=422&height=422")
	.setColor('#00f8ff')

	message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })
	
  }
}