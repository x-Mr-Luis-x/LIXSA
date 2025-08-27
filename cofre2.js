const Discord = require('discord.js');
const db = require('megadb');
const diamante = new db.crearDB('diamante');
const cofre = new db.crearDB('cofre');

module.exports = {
	name: 'cofre2xdxdxdxdxd',
	alias: [],

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
.addField("<a:flecha_lixsa:910560844893544498> | GEMAS:", `<:diamante:925189523397287967> **Diamantes** (x${cofreT})\n<:diamanterosa:925189506628468837> **Diamante Rosa** (x0) \n<:esmeralda:925189523447611443> **Esmeralda** (x0) \n<:gemamagica:925189528598237254> **Gema Mágica** (x0) \n<:special_diamond:925189859893715005> **Diamante Especial** (x0)`)
.addField("<a:flecha_mikzu:910898640464265296> | ITEMS:", `<:cofremagico:925189505428910141> **Cofre Mágico** (x0) \n<:llave:925189529302859818> **Llave** (x0) \n<:caa:925189522742992946> **Caña** (x0) \n<:pico:925189526798876743> **Pica** (x0) \n<:specialbox:925189521925099562> **Cajita Especial** (x1) \n<:box:925189489557651507> **Cajita** (x0)`, true)
.addField("<a:flecha_mikzu:910898640464265296> | ARMAS", `<:pistola:925289400877867038> **Pistola** (x0) \n<:fusil:925289406863118376> **Fusil** (x0) \n<:ametralladora:925289407697780766> **Metralleta** (x0) \n<:granada:925289410776428604> **Granada** (x0) \n<:grandadehumo:925289410533134356> **Granada de Humo** (x0) \n<:misil:925289406439497758> **Misil** (x0)`, true)
.setThumbnail("https://media.discordapp.net/attachments/923453900571435053/925196124841713664/cofre.png?width=422&height=422")
.setColor('#fd1144')

const embedgemas = new Discord.MessageEmbed()
.setAuthor(usuario.tag, usuario.displayAvatarURL())
.addField("<a:flecha_lixsa:910560844893544498> | GEMAS:", `<:diamante:925189523397287967> **Diamantes** (x${cofreT})\n<:diamanterosa:925189506628468837> **Diamante Rosa** (x0) \n<:esmeralda:925189523447611443> **Esmeralda** (x0) \n<:gemamagica:925189528598237254> **Gema Mágica** (x0) \n<:special_diamond:925189859893715005> **Diamante Especial** (x0)`)
.setThumbnail("https://media.discordapp.net/attachments/923453900571435053/925196124841713664/cofre.png?width=422&height=422")
.setColor("#fd1144")

const embeditems = new Discord.MessageEmbed()
.setAuthor(usuario.tag, usuario.displayAvatarURL())
.addField("<a:flecha_mikzu:910898640464265296> | ITEMS:", `<:cofremagico:925189505428910141> **Cofre Mágico** (x0) \n<:llave:925189529302859818> **Llave** (x0) \n<:caa:925189522742992946> **Caña** (x0) \n<:pico:925189526798876743> **Pica** (x0) \n<:specialbox:925189521925099562> **Cajita Especial** (x1) \n<:box:925189489557651507> **Cajita** (x0)`)
.setThumbnail("https://media.discordapp.net/attachments/923453900571435053/925196124841713664/cofre.png?width=422&height=422")
.setColor("#fd1144")

const embedarmas = new Discord.MessageEmbed()
.addField("<a:flecha_mikzu:910898640464265296> | ARMAS", `<:pistola:925289400877867038> **Pistola** (x0) \n<:fusil:925289406863118376> **Fusil** (x0) \n<:ametralladora:925289407697780766> **Metralleta** (x0) \n<:granada:925289410776428604> **Granada** (x0) \n<:grandadehumo:925289410533134356> **Granada de Humo** (x0) \n<:misil:925289406439497758> **Misil** (x0)`)
.setThumbnail("https://media.discordapp.net/attachments/923453900571435053/925196124841713664/cofre.png?width=422&height=422")
.setColor("#fd1144")

  const menu = new Discord.MessageActionRow()
.addComponents(
	new Discord.MessageSelectMenu()
.setCustomId("menu")
.setPlaceholder('INVENTARIO')
.addOptions([
	{
		label: "GEMAS",
		description: "Inventario de Gemas",
    value: "1",
    emoji: "<:diamante:925189523397287967> "
	},
	{
		label: "ITEMS",
    description: "Inventario de Items",
		value: "2",
    emoji: "<:cofremagico:925189505428910141>"
	},
  {
		label: "ARMAS",
    description: "Inventario de Armas",
		value: "3",
    emoji: "<:pistola:925289400877867038>"
	}
])
)

const msg = await message.channel.send({
  embeds: [embed],
	components: [menu]
})

const ifilter = i => i.user.id === message.author.id;
		
const collector = msg.createMessageComponentCollector({ filter: ifilter })

collector.on('collect', async i => {
if(i.values[0] === '1'){
await i.deferUpdate()
 i.editReply({ embeds: [embedgemas], components: [menu] })
}
	if(i.values[0] === '2'){
await i.deferUpdate()
 i.editReply({ embeds: [embeditems], components: [menu] })
	}
  if(i.values[0] === '3'){
await i.deferUpdate()
 i.editReply({ embeds: [embedarmas], components: [menu] })
	}
})

  }
}