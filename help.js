const Discord = require('discord.js');

module.exports = {
	name: 'help',
	alias: [],

	async execute (client, message, args) {

const embed = new Discord.MessageEmbed()
		.setTitle("MANTENIMIENTO")
.setDescription("NO DISPONIBLE POR EL MOMENTO")
.setColor("RANDOM")

		const embed2 = new Discord.MessageEmbed()
		.setTitle("MANTENIMIENTO")
.setDescription("NO DISPONIBLE POR EL MOMENTO")
.setColor("RANDOM")

		const embed3 = new Discord.MessageEmbed()
		.setTitle("MANTENIMIENTO")
.setDescription("NO DISPONIBLE POR EL MOMENTO")
.setColor("RANDOM")

  const menu = new Discord.MessageActionRow()
.addComponents(
	new Discord.MessageSelectMenu()
.setCustomId("menu")
.setPlaceholder('CATEGORIAS')
.addOptions([
	{
		label: "1",
		description: "1",
    value: "1" 
	},
	{
		label: "2",
    description: "2",
		value: "2"
	},
  {
		label: "3",
    description: "3",
		value: "3"
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
 i.editReply({ embeds: [embed], components: [menu] })
}
	if(i.values[0] === '2'){
await i.deferUpdate()
 i.editReply({ embeds: [embed2], components: [menu] })
	}
  if(i.values[0] === '3'){
await i.deferUpdate()
 i.editReply({ embeds: [embed3], components: [menu] })
	}
})

  }
}