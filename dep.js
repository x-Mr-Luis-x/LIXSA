const Discord = require("discord.js");
const db = require('megadb');
const diamante = new db.crearDB('diamante');
const cofre = new db.crearDB('cofre');

module.exports = {
	name: 'dep',
	alias: [],

	async execute (client, message, args) {

    const usuario = args.join(" ")
      if(!usuario) return message.channel.send("DEBES PONER CANTIDAD A DEPOSITAR")

const user = message.author;

const total = parseInt(await diamante.obtener(message.author.id));

		const cantidad = parseInt(args[0]);

if(args[0] === "all"){
	diamante.restar(message.author.id, total);
	cofre.sumar(message.author.id, total);

  const embedtotal = new Discord.MessageEmbed()
	.setAuthor(user.tag, user.displayAvatarURL())
  .setTitle("DEPOSITO EXITOSO <:vf:925189693300154399>")
  .setDescription(`<:diamante:925189523397287967> **Diamante** (x${total}) <a:flecha_lixsa:910560844893544498> <:cofre:925189506498461776> **Cofre**`)
  .setThumbnail("https://media.discordapp.net/attachments/923453900571435053/925196124841713664/cofre.png?width=422&height=422")
	.setColor('#fd1144')

	message.reply({ embeds: [embedtotal], allowedMentions: { repliedUser: false }  })
	return;
}


const embedall = new Discord.MessageEmbed()
	.setAuthor(user.tag, user.displayAvatarURL())
  .setTitle("DEPOSITO NO ENCONTRADO <:xx:925189718302408764> ")
  .setDescription('Debes poner una cantidad de <:diamante:925189523397287967> **Diamante** o usa `ls!dep all`')
  .setThumbnail("https://media.discordapp.net/attachments/923453900571435053/925188787154325534/xx.png?width=422&height=422")
	.setColor('#f8f8f9')

    if(cantidad !== "all"){
      if(isNaN(cantidad)) return message.reply({ embeds: [embedall], allowedMentions: { repliedUser: false }  })

}
		
		if(cantidad > total){
    const embedmas = new Discord.MessageEmbed()
	.setAuthor(user.tag, user.displayAvatarURL())
  .setTitle("DEPOSITO EXAGERADO <:xx:925189718302408764> ")
  .setDescription('No puedes depositar mas  <:diamante:925189523397287967> **Diamante** de lo que tienes')
  .setThumbnail("https://media.discordapp.net/attachments/923453900571435053/925188787154325534/xx.png?width=422&height=422")
	.setColor('#f8f8f9')

  return message.reply({ embeds: [embedmas], allowedMentions: { repliedUser: false }  })
			
	}
    const embedcero = new Discord.MessageEmbed()
	.setAuthor(user.tag, user.displayAvatarURL())
  .setTitle("DEPOSITO INVALIDO <:xx:925189718302408764> ")
  .setDescription('La cantidad de <:diamante:925189523397287967> **Diamante** al depositar debe ser mayor a 0')
  .setThumbnail("https://media.discordapp.net/attachments/923453900571435053/925188787154325534/xx.png?width=422&height=422")
	.setColor('#f8f8f9')

    if(cantidad === 0){
    return message.reply({ embeds: [embedcero], allowedMentions: { repliedUser: false }  })
  
  }
	
	diamante.restar(message.author.id, cantidad);
	cofre.sumar(message.author.id, cantidad);

    const embedcantidad = new Discord.MessageEmbed()
	.setAuthor(user.tag, user.displayAvatarURL())
  .setTitle("DEPOSITO EXITOSO <:vf:925189693300154399>")
  .setDescription(`<:diamante:925189523397287967> **Diamante** (x${cantidad}) <a:flecha_lixsa:910560844893544498> <:cofre:925189506498461776> **Cofre**`)
  .setThumbnail("https://media.discordapp.net/attachments/923453900571435053/925196124841713664/cofre.png?width=422&height=422")
	.setColor('#fd1144')

	message.reply({ embeds: [embedcantidad], allowedMentions: { repliedUser: false }  })

  }
}