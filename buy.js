const Discord = require('discord.js');
const db = require('megadb');
const diamante = new db.crearDB('diamante');
const diamanterosa = new db.crearDB('diamanterosa');
const esmeralda = new db.crearDB('esmeralda');
const gemamikzu = new db.crearDB('gemamikzu');
const diamondlixsa = new db.crearDB('diamondlixsa');
const picodiamante = new db.crearDB('picodiamante');
const picorosa = new db.crearDB('picorosa');
const picoesmeralda = new db.crearDB('picoesmeralda');
const picomikzu = new db.crearDB('picomikzu');
const picolixsa = new db.crearDB('picolixsa');

module.exports = {
	name: 'buy',
	alias: ['comprar'],

async execute (client, message, args) {

  const user = message.author
  
  const objeto = args.join(' ')
  if(!objeto) return message.channel.send("Debes escribir un objeto")




  const diamanteuser = await diamante.obtener(`${user.id}`)
  const diamanterosauser = await diamanterosa.obtener(`${user.id}`)
  const esmeraldauser = await esmeralda.obtener(`${user.id}`)
  const gemamikzuuser = await gemamikzu.obtener(`${user.id}`)
  const diamondlixsauser = await diamondlixsa.obtener(`${user.id}`)
  
   if (!picodiamante.tiene(`${user.id}`))
    picodiamante.establecer(`${user.id}`, 0)
  if (!picorosa.tiene(`${user.id}`))
    picorosa.establecer(`${user.id}`, 0)
  if (!picoesmeralda.tiene(`${user.id}`))
    picoesmeralda.establecer(`${user.id}`, 0)
  if (!picomikzu.tiene(`${user.id}`))
    picomikzu.establecer(`${user.id}`, 0)
  if (!picolixsa.tiene(`${user.id}`))
    picolixsa.establecer(`${user.id}`, 0)

  if(objeto === "pica"){

  if(diamanteuser < 100) return message.channel.send("No tienes suficientes <:diamante:925189523397287967> **Diamante**")

  diamante.restar(user.id, 100)
   
  picodiamante.sumar(`${user.id}`, 1)

  message.reply({ content: "Has comprado <:pico:925189526798876743> **Pico Diamante** !", allowedMentions: { repliedUser: false } })

  }

  if(objeto === "pica rosa"){

  if(diamanterosauser < 500) return message.channel.send("No tienes suficientes <:diamanterosa:925189506628468837> **Diamante Rosa**")

  diamanterosa.restar(`${user.id}`, 500)
   
  picorosa.sumar(`${user.id}`, 1)

  message.reply({ content: "Has comprado <:pico_rosa:929936851425448006> **Pico Rosa** !", allowedMentions: { repliedUser: false } })

  }

  }
}