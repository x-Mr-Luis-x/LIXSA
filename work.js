const Discord = require('discord.js');
const db = require('megadb');
const diamante = new db.crearDB('diamante');

var cooldown = new Set();

module.exports = {
	name: 'work',
	alias: ['w'],

execute (client, message, args) {

const user = message.author;

if(cooldown.has(message.author.id)){

    const embedcol = new Discord.MessageEmbed()
  .setAuthor(user.tag, user.displayAvatarURL())
  .setTitle("<:relojdearena:925189519773421578> DESCANSO <:relojdearena:925189519773421578>")
  .setDescription(`No te sientes cansad@ ${user}? \nRegresa en <:relojdearena:925189519773421578> **1 HORA** para volver al trabajo`)
  .setThumbnail("https://media.discordapp.net/attachments/923453900571435053/925188789289242696/reloj_de_arena.png?width=422&height=422")
  .setColor('#eb76f7')

	message.reply({ embeds: [embedcol], allowedMentions: { repliedUser: false } });

return;
}

	cooldown.add(message.author.id);

	setTimeout(() => {
		cooldown.delete(message.author.id)
	}, 3600000);

	
	if(!diamante.tiene(message.author.id)) {
   diamante.establecer(message.author.id, `0`)
	}

var jobs = [
	"VENDEDOR DE JOYAS", "FABRICANTE DE ANILLOS"
];

var rjobs = jobs[Math.floor(Math.random() * jobs.length)];

	var diamond = Math.floor(Math.random() * 250) + 150;

	const embed = new Discord.MessageEmbed()
.setAuthor(message.author.tag, message.author.displayAvatarURL())
	.setDescription(`${user} \n\n<a:flecha_lixsa:910560844893544498> | Has trabajado de **${rjobs}** te han pagado: \n<:diamante:925189523397287967> **Diamantes** (x${diamond})`)
.setThumbnail("https://media.discordapp.net/attachments/923453900571435053/925189094865268796/joyeria.png?width=422&height=422")
	.setColor('#b5cbee')

message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

diamante.sumar(message.author.id, `${diamond}`);

  }
}

