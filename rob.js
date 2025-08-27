const Discord = require('discord.js');
const db = require('megadb');


module.exports = {
	name: 'robarxdddxdxdxdx',
	alias: ["robdxdxdxdxdxd"],

async execute (client, message, args){

  const user = message.author
  const persona = message.mentions.users.first()

  if(!persona) return message.channel.send("DEBES MENCIONAR A ALGUIEN")

  let dineropersona = await dinero.obtener(`${persona.id}`) 
  let dinerouser = await dinero.obtener(`${user.id}`)

  let dineroaleatorio = Math.floor(Math.random() * dineropersona) + 1
  let dineroaleatoriomio = Math.floor(Math.random() * dinerouser) + 1

  if(persona.id === message.author.id) return message.channel.send("No te puedes robar a ti mismo!")
  if(!isNaN(args[0])) message.channel.send("Eso no es un usuario valido")

  if(dineropersona < 5000) return message.channel.send("Esa persona tiene Muy poco dinero como para robarle")
  if(!dinero.tiene(`${persona.id}`)) return message.channel.send("Esta persona no tiene dinero!")

  let resultadomalo = ['mal']
  let resultadobueno = ['bien']
  let resultado = [resultadomalo, resultadobueno]
  let resultadofinal = resultado[Math.floor(Math.random() * resultado.length)]

  //let posibilidades = ['bien', 'mal']
  //let posibilidadfinal = posibilidades[Math.floor(Math.random() * posibilidades.length)]

  if(resultadofinal === resultadomalo){
    dinero.restar(persona.id, dineroaleatorio)

    dinero.sumar(user.id, dineroaleatorio)

    message.channel.send(`HAS ROBADO A **${persona.tag}** Y HAS CONSEGUIDO **${dineroaleatorio}**`)
  }

  if(resultadofinal === resultadobueno){

    dinero.restar(user.id, dineroaleatorio)

    message.channel.send(`HAS INTENTADO ROBAR A **${persona.tag}** Y HAS PERDIDO **${dineroaleatorio}**`)
  }

 }

}