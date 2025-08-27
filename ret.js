const Discord = require("discord.js");
const db = require('megadb');
const diamante = new db.crearDB('diamante');
const cofre = new db.crearDB('cofre');

module.exports = {
	name: 'ret',
	alias: [],

	async execute (client, message, args) {

    const usuario = args.join(" ")
      if(!usuario) return message.channel.send("DEBES PONER CANTIDAD A RETIRAR")

const user = message.author;

const total = parseInt(await cofre.obtener(message.author.id));

		const cantidad = parseInt(args[0]);

if(args[0] === "all"){
	cofre.restar(message.author.id, total);
	diamante.sumar(message.author.id, total)

  const embedtotal = new Discord.MessageEmbed()
	.setAuthor(user.tag, user.displayAvatarURL())
  .setTitle("RETIRO EXITOSO <:vf:925189693300154399>")
  .setDescription(`<:cofre:925189506498461776> **Cofre** <a:flecha_lixsa:910560844893544498> <:diamante:925189523397287967> **Diamante** (x${total})`)
  .setThumbnail("https://media.discordapp.net/attachments/923453900571435053/925189096849174528/diamante.png?width=422&height=422")
	.setColor('#00f8ff')

	message.reply({ embeds: [embedtotal], allowedMentions: { repliedUser: false }  })

	return;
}

const embedall = new Discord.MessageEmbed()
	.setAuthor(user.tag, user.displayAvatarURL())
  .setTitle("RETIRO NO ENCONTRADO <:xx:925189718302408764> ")
  .setDescription('Debes poner una cantidad de <:diamante:925189523397287967> **Diamante** o usa `ls!ret all`')
  .setThumbnail("https://media.discordapp.net/attachments/923453900571435053/925188787154325534/xx.png?width=422&height=422")
	.setColor('#f8f8f9')

    if(cantidad !== "all"){
      if(isNaN(cantidad)) return message.reply({ embeds: [embedall], allowedMentions: { repliedUser: false }  })

}
		
		if(cantidad > total){
    const embedmas = new Discord.MessageEmbed()
	.setAuthor(user.tag, user.displayAvatarURL())
  .setTitle("RETIRO EXAGERADO <:xx:925189718302408764> ")
  .setDescription('No puedes retirar mas  <:diamante:925189523397287967> **Diamante** de lo que tienes')
  .setThumbnail("https://media.discordapp.net/attachments/923453900571435053/925188787154325534/xx.png?width=422&height=422")
	.setColor('#f8f8f9')

  return message.reply({ embeds: [embedmas], allowedMentions: { repliedUser: false }  })
}
    
		const embedcero = new Discord.MessageEmbed()
	.setAuthor(user.tag, user.displayAvatarURL())
  .setTitle("RETIRO INVALIDO <:xx:925189718302408764> ")
  .setDescription('La cantidad de <:diamante:925189523397287967> **Diamante** al retirar debe ser mayor a 0')
  .setThumbnail("https://media.discordapp.net/attachments/923453900571435053/925188787154325534/xx.png?width=422&height=422")
	.setColor('#f8f8f9')

    if(cantidad === 0){
    return message.reply({ embeds: [embedcero], allowedMentions: { repliedUser: false }  })
}
	
	cofre.restar(message.author.id, cantidad);
	diamante.sumar(message.author.id, cantidad);

    const embedcantidad = new Discord.MessageEmbed()
	.setAuthor(user.tag, user.displayAvatarURL())
  .setTitle("RETIRO EXITOSO <:vf:925189693300154399>")
  .setDescription(`<:cofre:925189506498461776> **Cofre** <a:flecha_lixsa:910560844893544498> <:diamante:925189523397287967> **Diamante** (x${cantidad})`)
  .setThumbnail("https://media.discordapp.net/attachments/923453900571435053/925189096849174528/diamante.png?width=422&height=422")
	.setColor('#00f8ff')

	message.reply({ embeds: [embedcantidad], allowedMentions: { repliedUser: false } })

  }
}