const Discord = require('discord.js');
const db = require('megadb')
const diamante = new db.crearDB('diamante')

  module.exports = { 
    name: 'sharexd',
	  alias: ['compartirxd'],
    
    async execute(client, message, args) {

  const user = message.author
  const persona = message.mentions.users.first();

  if(!persona) return message.channel.send("Debes mencionar a alguien")


  let diamantepersona = await diamante.obtener(`${persona.id}`)
  let diamanteuser = await diamante.obtener(`${user.id}`)

  const cantidads = parseInt(args[0]);
  if(!cantidads) return message.channel.send("Debes decir una cantidad")

  if(!persona === message.author) return message.channel.send("No te puedes dar dinero a ti mismo pendej@")
  if(!isNaN(args[0])) return message.channel.send("Eso no es un usuario valido")


  const cantidadt = await diamante.obtener(`${user.id}`)

  if(!cantidadt < cantidad){
    return message.channel.send("No tienes tanto dinero!")

  }
  if(!cantidad === 'max'){
    diamante.sumar(`${persona.id}`, cantidad)
  diamante.restar(`${user.id}`, cantidad)

  message.channel.send(`Has dado a ${user.id} **${cantidad}**`)

  }


 }
}