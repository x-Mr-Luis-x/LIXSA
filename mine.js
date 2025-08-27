const Discord = require('discord.js')
const db = require('megadb')
const diamante = new db.crearDB('diamante')
const diamanterosa = new db.crearDB('diamanterosa')
const gemaoro = new db.crearDB('gemaoro')
const esmeralda = new db.crearDB('esmeralda')
const gemamikzu = new db.crearDB('gemamikzu')
const diamondlixsa = new db.crearDB('diamondlixsa')
const picodiamante = new db.crearDB('picodiamante')
const picorosa = new db.crearDB('picorosa')
const picodorado = new db.crearDB('picodorado')
const picoesmeralda = new db.crearDB('picoesmeralda')
const picomikzu = new db.crearDB('picomikzu')
const picolixsa = new db.crearDB('picolixsa')
const cajita = new db.crearDB('cajita')
const cajitaclasica = new db.crearDB('cajitaclasica')
const cajasecreta = new db.crearDB('cajasecreta')
const cofremagico = new db.crearDB('cofremagico')
const cajitamagica = new db.crearDB('cajitamagica')
const cajitasupreme = new db.crearDB('cajitasupreme')
const cajamilitar = new db.crearDB('cajamilitar')
const cajitamikzu = new db.crearDB('cajitamikzu')
const cajitalixsa = new db.crearDB('cajitalixsa')

const pistola = new db.crearDB('pistola')
const pocionamor = new db.crearDB('pocionamor')
const pocionmagica = new db.crearDB('pocionmagica')
const bolsamagica = new db.crearDB('bolsamagica')
const pocionrosa = new db.crearDB('pocionrosa')
const cartas = new db.crearDB('cartas')
const llave = new db.crearDB('llave')
const madera = new db.crearDB('madera')
const papel = new db.crearDB('papel')

const acero = new db.crearDB('acero')
const cajacarton = new db.crearDB('cajacarton')
const tornillo = new db.crearDB('tornillo')
const carbon = new db.crearDB('carbon')
const piedra = new db.crearDB('piedra')
const roca = new db.crearDB('roca')
const aluminio = new db.crearDB('aluminio')
const lazo = new db.crearDB('lazo')

let cooldown = new Set();

module.exports = {
  name: "mine", 
  alias: [], 

async execute (client, message, args){


  const mina = args.join(' ')
  if(!mina) return message.reply({ content: "Debes elejir una zona donde minar", allowedMentions: { repliedUser: false } })

  const user = message.author;


  const zonas = ["0", "1", "2", "3", "4", "5", "6"]

  const zonaMsg = args[0];

  if(!zonaMsg){

  }

  if(!zonas.includes(zonas[parseInt(zonaMsg)])) return message.reply({ content: "Esta Zona no Existe >:u", allowedMentions: { repliedUser: false } });

  if(cooldown.has(message.author.id)){
    
    const embedcol = new Discord.MessageEmbed()
  .setAuthor(user.tag, user.displayAvatarURL())
  .setDescription(`No te sientes cansad@ ${user}? \nRegresa en <:relojdearena:925189519773421578> **3 MINUTOS** para volver a minar`)
  .setThumbnail("https://media.discordapp.net/attachments/923453900571435053/925188789289242696/reloj_de_arena.png?width=422&height=422")
  .setColor('#eb76f7')

    message.reply({ embeds: [embedcol], allowedMentions: { repliedUser: false } });

    return;
  }

  if (!diamante.tiene(`${user.id}`))
    diamante.establecer(`${user.id}`, 0)
  if (!diamanterosa.tiene(`${user.id}`))
    diamanterosa.establecer(`${user.id}`, 0)
  if (!gemaoro.tiene(`${user.id}`))
    gemaoro.establecer(`${user.id}`, 0)
  if (!esmeralda.tiene(`${user.id}`))
    esmeralda.establecer(`${user.id}`, 0)
  if (!gemamikzu.tiene(`${user.id}`))
    gemamikzu.establecer(`${user.id}`, 0)
  if (!diamondlixsa.tiene(`${user.id}`))
    diamondlixsa.establecer(`${user.id}`, 0)
  if (!picodiamante.tiene(`${user.id}`))
    picodiamante.establecer(`${user.id}`, 0)
  if (!picorosa.tiene(`${user.id}`))
    picorosa.establecer(`${user.id}`, 0)
  if (!picodorado.tiene(`${user.id}`))
    picodorado.establecer(`${user.id}`, 0)
  if (!picoesmeralda.tiene(`${user.id}`))
    picoesmeralda.establecer(`${user.id}`, 0)
  if (!picomikzu.tiene(`${user.id}`))
    picomikzu.establecer(`${user.id}`, 0)
  if (!picolixsa.tiene(`${user.id}`))
    picolixsa.establecer(`${user.id}`, 0)
  if(!cajita.tiene(`${user.id}`))
    cajita.establecer(`${user.id}`, 0)
  if(!cajitaclasica.tiene(`${user.id}`))
    cajitaclasica.establecer(`${user.id}`, 0)
  if(!cajasecreta.tiene(`${user.id}`))
    cajasecreta.establecer(`${user.id}`, 0)
  if(!cofremagico.tiene(`${user.id}`))
    cofremagico.establecer(`${user.id}`, 0)
  if(!cajitamagica.tiene(`${user.id}`))
    cajitamagica.establecer(`${user.id}`, 0)
  if(!cajitasupreme.tiene(`${user.id}`))
    cajitasupreme.establecer(`${user.id}`, 0)
  if(!cajamilitar.tiene(`${user.id}`))
    cajamilitar.establecer(`${user.id}`, 0)
  if(!cajitamikzu.tiene(`${user.id}`))
    cajitamikzu.establecer(`${user.id}`, 0)
  if(!cajitalixsa.tiene(`${user.id}`))
    cajitalixsa.establecer(`${user.id}`, 0)

 if(!pocionamor.tiene(`${user.id}`))
    pocionamor.establecer(`${user.id}`, 0)
 if(!pocionmagica.tiene(`${user.id}`))
    pocionmagica.establecer(`${user.id}`, 0)
 if(!bolsamagica.tiene(`${user.id}`))
    bolsamagica.establecer(`${user.id}`, 0)
 if(!pocionrosa.tiene(`${user.id}`))
    pocionrosa.establecer(`${user.id}`, 0)
 if(!cartas.tiene(`${user.id}`))
    cartas.establecer(`${user.id}`, 0)
 if(!llave.tiene(`${user.id}`))
    llave.establecer(`${user.id}`, 0) 
 if(!madera.tiene(`${user.id}`))
    madera.establecer(`${user.id}`, 0)
 if(!papel.tiene(`${user.id}`))
    papel.establecer(`${user.id}`, 0)

  if(!carbon.tiene(`${user.id}`))
    carbon.establecer(`${user.id}`, 0)
  if(!piedra.tiene(`${user.id}`))
    piedra.establecer(`${user.id}`, 0)
  if(!roca.tiene(`${user.id}`))
    roca.establecer(`${user.id}`, 0)
  if(!aluminio.tiene(`${user.id}`))
    aluminio.establecer(`${user.id}`, 0)
  if(!acero.tiene(`${user.id}`))
    acero.establecer(`${user.id}`, 0)
  if(!cajacarton.tiene(`${user.id}`))
    cajacarton.establecer(`${user.id}`, 0)
  if(!tornillo.tiene(`${user.id}`))
    tornillo.establecer(`${user.id}`, 0)
  if(!lazo.tiene(`${user.id}`))
    lazo.establecer(`${user.id}`, 0)



  
  if(mina === '1'){

  const picodiamanteT = await picodiamante.obtener(`${user.id}`);

  if(picodiamanteT < 1) return message.reply({ content: "Necesitas <:pico:925189526798876743> **Pico Diamante** para minar esta zona", allowedMentions: { repliedUser: false } })

  let carbonS = Math.floor(Math.random() * 10) + 1
  let aluminioS = Math.floor(Math.random() * 10) + 1
  let rocaS = Math.floor(Math.random() * 10) + 1
  let picodiamanteE = Math.floor(Math.random() * 1) + 1
  let diamond = Math.floor(Math.random() * 10) + 1
  let cajitaS = Math.floor(Math.random() * 1) + 1


  let resultadomalo = ['mal']
  let resultadobueno1 = ['bien1']
  let resultadobueno2 = ['bien2']
  let resultadobueno3 = ['bien3']
  let resultadobueno4 = ['bien4']
  let resultadobueno5 = ['bien5']
  let resultadobueno6 = ['bien6']
  let resultadobueno7 = ['bien7']
  let resultadobueno8 = ['bien8']
  let resultadobueno9 = ['bien9']
  let resultadobueno10 = ['bien10']
  let resultadomejor = ['mejor']
  let resultado = [resultadomalo, resultadobueno1, resultadobueno2, resultadobueno3, resultadobueno4, resultadobueno5, resultadomejor]
  let resultadofinal = resultado[Math.floor(Math.random() * resultado.length)]


if(resultadofinal === resultadomalo){

      const embed = new Discord.MessageEmbed()

  .setTitle("<:pico:925189526798876743> | CUEVA")
  .setDescription(`**${user}** \nHas minado en **CUEVA** y has encontrado\n\n**GEMAS:**\n<:diamante:925189523397287967> **Diamante** (x${diamond}) \n\n**MATERIALES:**\n<:carbon:937106991178989608> **Carbón** (x${carbonS}) \n<:roca:937228470109499413> **Roca** (x${rocaS}) \n\n**PERDIDO:** \n<:pico:925189526798876743> **Pico Diamante** (x${picodiamanteE})`)
  .setThumbnail(`https://i.pinimg.com/originals/ce/7a/e6/ce7ae6251733e16e526fd5f0b4cb7a47.gif`)
  .setColor("#1d64a3")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

  diamante.sumar(`${user.id}`, diamond)
  carbon.sumar(`${user.id}`, carbonS)
  roca.sumar(`${user.id}`, rocaS)
  picodiamante.restar(`${user.id}`, 1)

  }
  

  if(resultadofinal === resultadobueno1){

   const embed = new Discord.MessageEmbed()

  .setTitle("<:pico:925189526798876743> | CUEVA")
  .setDescription(`**${user}** \nHas minado en **CUEVA** y has encontrado\n\n**GEMAS:**\n<:diamante:925189523397287967> **Diamante** (x${diamond})\n\n**MATERIALES:**\n<:roca:937228470109499413> **Roca** (x${rocaS})`)
  .setThumbnail(`https://i.pinimg.com/originals/ce/7a/e6/ce7ae6251733e16e526fd5f0b4cb7a47.gif`)
  .setColor("#1d64a3")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

  diamante.sumar(`${user.id}`, diamond)
  roca.sumar(`${user.id}`, rocaS)

  }

  if(resultadofinal === resultadobueno2){

   const embed = new Discord.MessageEmbed()

  .setTitle("<:pico:925189526798876743> | CUEVA")
  .setDescription(`**${user}** \nHas minado en **CUEVA** y has encontrado\n\n**GEMAS:**\n<:diamante:925189523397287967> **Diamante** (x${diamond})`)
  .setThumbnail(`https://i.pinimg.com/originals/ce/7a/e6/ce7ae6251733e16e526fd5f0b4cb7a47.gif`)
  .setColor("#1d64a3")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

  diamante.sumar(`${user.id}`, diamond)

  }

  if(resultadofinal === resultadobueno3){

   const embed = new Discord.MessageEmbed()

  .setTitle("<:pico:925189526798876743> | CUEVA")
  .setDescription(`**${user}** \nHas minado en **CUEVA** y has encontrado\n\n**GEMAS:**\n<:diamante:925189523397287967> **Diamante** (x${diamond})\n\n**MATERIALES:**\n<:carbon:937106991178989608> **Carbón** (x${carbonS}) \n<:roca:937228470109499413> **Roca** (x${rocaS}) \n<:aluminio:937218534973517854> **Aluminio** (x${aluminioS})`)
  .setThumbnail(`https://i.pinimg.com/originals/ce/7a/e6/ce7ae6251733e16e526fd5f0b4cb7a47.gif`)
  .setColor("#1d64a3")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

  diamante.sumar(`${user.id}`, diamond)
  carbon.sumar(`${user.id}`, carbonS)
  roca.sumar(`${user.id}`, rocaS)
  aluminio.sumar(`${user.id}`, aluminioS)

  }

  if(resultadofinal === resultadobueno4){

   const embed = new Discord.MessageEmbed()

  .setTitle("<:pico:925189526798876743> | CUEVA")
  .setDescription(`**${user}** \nHas minado en **CUEVA** y has encontrado\n\n**GEMAS:**\n<:diamante:925189523397287967> **Diamante** (x${diamond})`)
  .setThumbnail(`https://i.pinimg.com/originals/ce/7a/e6/ce7ae6251733e16e526fd5f0b4cb7a47.gif`)
  .setColor("#1d64a3")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

  diamante.sumar(`${user.id}`, diamond)

  }

  if(resultadofinal === resultadobueno5){

   const embed = new Discord.MessageEmbed()

  .setTitle("<:pico:925189526798876743> | CUEVA")
  .setDescription(`**${user}** \nHas minado en **CUEVA** y has encontrado\n\n**GEMAS:**\n<:diamante:925189523397287967> **Diamante** (x${diamond})\n\n**MATERIALES:**\n<:carbon:937106991178989608> **Carbón** (x${carbonS})`)
  .setThumbnail(`https://i.pinimg.com/originals/ce/7a/e6/ce7ae6251733e16e526fd5f0b4cb7a47.gif`)
  .setColor("#1d64a3")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

  diamante.sumar(`${user.id}`, diamond)
  carbon.sumar(`${user.id}`, carbonS)

  }

  if(resultadofinal === resultadobueno6){

   const embed = new Discord.MessageEmbed()

  .setTitle("<:pico:925189526798876743> | CUEVA")
  .setDescription(`**${user}** \nHas minado en **CUEVA** y has encontrado\n\n**GEMAS:**\n<:diamante:925189523397287967> **Diamante** (x${diamond})`)
  .setThumbnail(`https://i.pinimg.com/originals/ce/7a/e6/ce7ae6251733e16e526fd5f0b4cb7a47.gif`)
  .setColor("#1d64a3")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

  diamante.sumar(`${user.id}`, diamond)

  }

  if(resultadofinal === resultadobueno7){

   const embed = new Discord.MessageEmbed()

  .setTitle("<:pico:925189526798876743> | CUEVA")
  .setDescription(`**${user}** \nHas minado en **CUEVA** y has encontrado\n\n**GEMAS:**\n<:diamante:925189523397287967> **Diamante** (x${diamond})\n\n**MATERIALES:**\n<:carbon:937106991178989608> **Carbón** (x${carbonS}) **Aluminio** (x${aluminioS})`)
  .setThumbnail(`https://i.pinimg.com/originals/ce/7a/e6/ce7ae6251733e16e526fd5f0b4cb7a47.gif`)
  .setColor("#1d64a3")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

  diamante.sumar(`${user.id}`, diamond)
  carbon.sumar(`${user.id}`, carbonS)
  aluminio.sumar(`${user.id}`, aluminioS)

  }

  if(resultadofinal === resultadobueno8){

   const embed = new Discord.MessageEmbed()

  .setTitle("<:pico:925189526798876743> | CUEVA")
  .setDescription(`**${user}** \nHas minado en **CUEVA** y has encontrado\n\n**GEMAS:**\n<:diamante:925189523397287967> **Diamante** (x${diamond})`)
  .setThumbnail(`https://i.pinimg.com/originals/ce/7a/e6/ce7ae6251733e16e526fd5f0b4cb7a47.gif`)
  .setColor("#1d64a3")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

  diamante.sumar(`${user.id}`, diamond)

  }

  if(resultadofinal === resultadobueno9){

   const embed = new Discord.MessageEmbed()

  .setTitle("<:pico:925189526798876743> | CUEVA")
  .setDescription(`**${user}** \nHas minado en **CUEVA** y has encontrado\n\n**GEMAS:**\n<:diamante:925189523397287967> **Diamante** (x${diamond})\n\n**MATERIALES:**\n<:carbon:937106991178989608> **Carbón** (x${carbonS}) \n<:roca:937228470109499413> **Roca** (x${rocaS})`)
  .setThumbnail(`https://i.pinimg.com/originals/ce/7a/e6/ce7ae6251733e16e526fd5f0b4cb7a47.gif`)
  .setColor("#1d64a3")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

  diamante.sumar(`${user.id}`, diamond)
  carbon.sumar(`${user.id}`, carbonS)
  roca.sumar(`${user.id}`, rocaS)

  }

  if(resultadofinal === resultadobueno10){

   const embed = new Discord.MessageEmbed()

  .setTitle("<:pico:925189526798876743> | CUEVA")
  .setDescription(`**${user}** \nHas minado en **CUEVA** y has encontrado\n\n**GEMAS:**\n<:diamante:925189523397287967> **Diamante** (x${diamond})`)
  .setThumbnail(`https://i.pinimg.com/originals/ce/7a/e6/ce7ae6251733e16e526fd5f0b4cb7a47.gif`)
  .setColor("#1d64a3")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

  diamante.sumar(`${user.id}`, diamond)

  }

  if(resultadofinal === resultadomejor){

    const embed = new Discord.MessageEmbed()

  .setTitle("<:pico:925189526798876743> | CUEVA")
  .setDescription(`**${user}** \nHas minado en **CUEVA** y has encontrado\n\n**GEMAS:**\n<:diamante:925189523397287967> **Diamante** (x${diamond}) \n\n**TESOROS**: \n<:box:925189489557651507> **Cajita** (x${cajitaS})`)
  .setThumbnail(`https://i.pinimg.com/originals/ce/7a/e6/ce7ae6251733e16e526fd5f0b4cb7a47.gif`)
  .setColor("#1d64a3")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

  diamante.sumar(`${user.id}`, diamond)
  cajita.sumar(`${user.id}`,  cajitaS)
  }
  }

  

  if(mina === '2'){

    
    const picorosaT = await picorosa.obtener(`${user.id}`);

    if(picorosaT < 1) return message.reply({ content: "Necesitas <:pico_rosa:929936851425448006> **Pico Rosa** para minar esta zona", allowedMentions: { repliedUser: false } })

    let picorosaE = Math.floor(Math.random() * 1) + 1
    let piedraS = Math.floor(Math.random() * 10) + 1
    let rocaS = Math.floor(Math.random() * 10) + 1
    let aluminioS = Math.floor(Math.random() * 10) + 1
    let diamondpink = Math.floor(Math.random() * 10) + 1
    let cajitaT = Math.floor(Math.random() * 1) + 1

  let resultadomalo = ['mal']
  let resultadobueno1 = ['bien1']
  let resultadobueno2 = ['bien2']
  let resultadobueno3 = ['bien3']
  let resultadobueno4 = ['bien4']
  let resultadobueno5 = ['bien5']
  let resultadobueno6 = ['bien6']
  let resultadobueno7 = ['bien7']
  let resultadobueno8 = ['bien8']
  let resultadobueno9 = ['bien9']
  let resultadobueno10 = ['bien10']
  let resultadomejor = ['mejor']
  let resultado = [resultadomalo, resultadobueno1, resultadobueno2, resultadobueno3, resultadobueno4, resultadobueno5, resultadomejor]
  let resultadofinal = resultado[Math.floor(Math.random() * resultado.length)]

  if(resultadofinal === resultadomalo){

   const embed = new Discord.MessageEmbed()

  .setTitle("<:pico_rosa:929936851425448006> | CIUDAD2")
  .setDescription(`**${user}** \n\nHas minado en **CIUDAD** y has encontrado: \n\n**GEMAS:** \n<:diamanterosa:925189506628468837> **Diamante Rosa** (x${diamondpink}) \n\n**MATERIALES:** \n<:roca:937228470109499413> **Roca** (x${rocaS}) \n\n**PERDIDO: \n**<:pico_rosa:929936851425448006> **Pico Rosa** (x${picorosaE})`)
  .setThumbnail("https://c.tenor.com/wIa91mot0tAAAAAd/pixel-city-chill.gif")
  .setColor("#f196bd")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

  roca.sumar(`${user.id}`, rocaS)
  diamanterosa.sumar(`${user.id}`, diamondpink) 
  picorosa.restar(`${user.id}`, 1)
  }

  if(resultadofinal === resultadobueno1){

   const embed = new Discord.MessageEmbed()

  .setTitle("<:pico_rosa:929936851425448006> | CIUDAD")
  .setDescription(`**${user}** \n\nHas minado en **CIUDAD** y has encontrado: \n\n**GEMAS:** \n<:diamanterosa:925189506628468837> **Diamante Rosa** (x${diamondpink})`)
  .setThumbnail("https://c.tenor.com/wIa91mot0tAAAAAd/pixel-city-chill.gif")
  .setColor("#f196bd")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

  diamanterosa.sumar(`${user.id}`, diamondpink)

  }

  if(resultadofinal === resultadobueno2){

   const embed = new Discord.MessageEmbed()

  .setTitle("<:pico_rosa:929936851425448006> | CIUDAD")
  .setDescription(`**${user}** \n\nHas minado en **CIUDAD** y has encontrado: \n\n**GEMAS:** \n<:diamanterosa:925189506628468837> **Diamante Rosa** (x${diamondpink}) \n\n**MATERIALES:** \n<:piedra:937218501024841838> **Piedra** (x${piedraS}) \n<:roca:937228470109499413> (x${rocaS})`)
  .setThumbnail("https://c.tenor.com/wIa91mot0tAAAAAd/pixel-city-chill.gif")
  .setColor("#f196bd")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

  roca.sumar(`${user.id}`, rocaS)
  piedra.sumar(`${user.id}`, piedraS)
  diamanterosa.sumar(`${user.id}`, diamondpink)

  }

  if(resultadofinal === resultadobueno3){

   const embed = new Discord.MessageEmbed()

  .setTitle("<:pico_rosa:929936851425448006> | CIUDAD")
  .setDescription(`**${user}** \n\nHas minado en **CIUDAD** y has encontrado: \n\n**GEMAS:** \n<:diamanterosa:925189506628468837> **Diamante Rosa** (x${diamondpink})`)
  .setThumbnail("https://c.tenor.com/wIa91mot0tAAAAAd/pixel-city-chill.gif")
  .setColor("#f196bd")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

  diamanterosa.sumar(`${user.id}`, diamondpink)

  }

  if(resultadofinal === resultadobueno4){

   const embed = new Discord.MessageEmbed()

  .setTitle("<:pico_rosa:929936851425448006> | CIUDAD")
  .setDescription(`**${user}** \n\nHas minado en **CIUDAD** y has encontrado: \n\n**GEMAS:** \n<:diamanterosa:925189506628468837> **Diamante Rosa** (x${diamondpink})`)
  .setThumbnail("https://c.tenor.com/wIa91mot0tAAAAAd/pixel-city-chill.gif")
  .setColor("#f196bd")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

  diamanterosa.sumar(`${user.id}`, diamondpink)

  }

  if(resultadofinal === resultadobueno5){

   const embed = new Discord.MessageEmbed()

  .setTitle("<:pico_rosa:929936851425448006> | CIUDAD")
  .setDescription(`**${user}** \n\nHas minado en **CIUDAD** y has encontrado: \n\n**GEMAS:** \n<:diamanterosa:925189506628468837> **Diamante Rosa** (x${diamondpink}) \n\n**MATERIALES** \n<:aluminio:937218534973517854> **Aluminio** (x${aluminioS}) \n<:roca:937228470109499413> **Roca** (x${rocaS}) \n<:piedra:937218501024841838> **Piedra** (x${piedraS})`)
  .setThumbnail("https://c.tenor.com/wIa91mot0tAAAAAd/pixel-city-chill.gif")
  .setColor("#f196bd")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

  aluminio.sumar(`${user.id}`, aluminioS)
  roca.sumar(`${user.id}`, rocaS)
  piedra.sumar(`${user.id}`, piedraS)
  diamanterosa.sumar(`${user.id}`, diamondpink)

  }

  if(resultadofinal === resultadobueno6){

   const embed = new Discord.MessageEmbed()

  .setTitle("<:pico_rosa:929936851425448006> | CIUDAD")
  .setDescription(`**${user}** \n\nHas minado en **CIUDAD** y has encontrado: \n\n**GEMAS:** \n<:diamanterosa:925189506628468837> **Diamante Rosa** (x${diamondpink})`)
  .setThumbnail("https://c.tenor.com/wIa91mot0tAAAAAd/pixel-city-chill.gif")
  .setColor("#f196bd")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

  diamanterosa.sumar(`${user.id}`, diamondpink)

  }

  if(resultadofinal === resultadobueno7){

   const embed = new Discord.MessageEmbed()

  .setTitle("<:pico_rosa:929936851425448006> | CIUDAD")
  .setDescription(`**${user}** \n\nHas minado en **CIUDAD** y has encontrado: \n\n**GEMAS:** \n<:diamanterosa:925189506628468837> **Diamante Rosa** (x${diamondpink})`)
  .setThumbnail("https://c.tenor.com/wIa91mot0tAAAAAd/pixel-city-chill.gif")
  .setColor("#f196bd")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

  diamanterosa.sumar(`${user.id}`, diamondpink)

  }

  if(resultadofinal === resultadobueno8){

   const embed = new Discord.MessageEmbed()

  .setTitle("<:pico_rosa:929936851425448006> | CIUDAD")
  .setDescription(`**${user}** \n\nHas minado en **CIUDAD** y has encontrado: \n\n**GEMAS:** \n<:diamanterosa:925189506628468837> **Diamante Rosa** (x${diamondpink}) \n\n**MATERIALES** \n<:aluminio:937218534973517854> **Aluminio** (x${aluminioS}) \n<:roca:937228470109499413> **Roca** (x${rocaS}) \n<:piedra:937218501024841838> **Piedra** (x${piedraS})`)
  .setThumbnail("https://c.tenor.com/wIa91mot0tAAAAAd/pixel-city-chill.gif")
  .setColor("#f196bd")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

  aluminio.sumar(`${user.id}`, aluminioS)
  roca.sumar(`${user.id}`, rocaS)
  piedra.sumar(`${user.id}`, piedraS)
  diamanterosa.sumar(`${user.id}`, diamondpink)

  }

  if(resultadofinal === resultadobueno9){

   const embed = new Discord.MessageEmbed()

  .setTitle("<:pico_rosa:929936851425448006> | CIUDAD")
  .setDescription(`**${user}** \n\nHas minado en **CIUDAD** y has encontrado: \n\n**GEMAS:** \n<:diamanterosa:925189506628468837> **Diamante Rosa** (x${diamondpink})`)
  .setThumbnail("https://c.tenor.com/wIa91mot0tAAAAAd/pixel-city-chill.gif")
  .setColor("#f196bd")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

  diamanterosa.sumar(`${user.id}`, diamondpink)

  }

  if(resultadofinal === resultadobueno10){

   const embed = new Discord.MessageEmbed()

  .setTitle("<:pico_rosa:929936851425448006> | CIUDAD")
  .setDescription(`**${user}** \n\nHas minado en **CIUDAD** y has encontrado: \n\n**GEMAS:** \n<:diamanterosa:925189506628468837> **Diamante Rosa** (x${diamondpink}) \n\n**MATERIALES** \n<:aluminio:937218534973517854> **Aluminio** (x${aluminioS}) \n<:roca:937228470109499413> **Roca** (x${rocaS})`)
  .setThumbnail("https://c.tenor.com/wIa91mot0tAAAAAd/pixel-city-chill.gif")
  .setColor("#f196bd")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

  aluminio.sumar(`${user.id}`, aluminioS)
  roca.sumar(`${user.id}`, rocaS)
  diamanterosa.sumar(`${user.id}`, diamondpink)

  }

  if(resultadofinal === resultadomejor){

   const embed = new Discord.MessageEmbed()

  .setTitle("<:pico_rosa:929936851425448006> | CIUDAD")
  .setDescription(`**${user}** \n\nHas minado en **CIUDAD** y has encontrado: \n\n**GEMAS:** \n<:diamanterosa:925189506628468837> **Diamante Rosa** (x${diamondpink}) \n\n**TESOROS:** \n<:box:925189489557651507> **Cajita** (x${cajitaT})`)
  .setThumbnail("https://c.tenor.com/wIa91mot0tAAAAAd/pixel-city-chill.gif")
  .setColor("#f196bd")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

  diamanterosa.sumar(`${user.id}`, diamondpink)
  cajita.sumar(`${user.id}`,  cajitaT)
  }
  }

  if(mina === '3'){

    const picodoradoT = await picodorado.obtener(`${user.id}`)

    if(picodoradoT < 1) return message.reply({ content: "Necesitas <:pico_dorado:937708034883465226> **Pico Dorado** para minar esta zona", allowedMentions: { repliedUser: false } })

    let picodoradoE = Math.floor(Math.random() * 1) + 1
    let gemaoroT = Math.floor(Math.random() * 5) + 1
    let tornilloS = Math.floor(Math.random() * 5) + 1
    let rocaS = Math.floor(Math.random() * 5) + 1
    let carbonS = Math.floor(Math.random() * 5) + 1
    let cajitaclasicaT = Math.floor(Math.random() * 1) + 1

  let resultadomalo = ['mal']
  let resultadobueno1 = ['bien1']
  let resultadobueno2 = ['bien2']
  let resultadobueno3 = ['bien3']
  let resultadobueno4 = ['bien4']
  let resultadobueno5 = ['bien5']
  let resultadobueno6 = ['bien6']
  let resultadobueno7 = ['bien7']
  let resultadobueno8 = ['bien8']
  let resultadobueno9 = ['bien9']
  let resultadobueno10 = ['bien10']
  let resultadomejor = ['mejor']
  let resultado = [resultadomalo, resultadobueno1, resultadobueno2, resultadobueno3, resultadobueno4, resultadobueno5, resultadomejor, resultadobueno6, resultadobueno7, resultadobueno8, resultadobueno9, resultadobueno10]
  let resultadofinal = resultado[Math.floor(Math.random() * resultado.length)]

  if(resultadofinal === resultadomalo){

      const embed = new Discord.MessageEmbed()

  .setTitle("<:pico_dorado:937708034883465226> | CUEVA DORADA")
  .setDescription(`**${user}** \n\nHas minado en **CUEVA DORADA** y has encontrado: \n\n**GEMAS: \n**<:oro:937517645471825941> **Gema de Oro** (x${gemaoroT}) \n\n**MATERIALES**: \n<:tornillo:937112172327235635> **Tornillo** (x${tornilloS}) \n\n**PERDIDO:** \n<:pico_dorado:937708034883465226> **Pico Dorado** (x${picodoradoE})`)
  .setThumbnail("https://media.discordapp.net/attachments/923453900571435053/937730582161555466/file.png")
  .setColor("#ebe342")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

  tornillo.sumar(`${user.id}`, tornilloS)
  gemaoro.sumar(`${user.id}`, gemaoroT)
  picodorado.restar(`${user.id}`, 1)
  }


  if(resultadofinal === resultadobueno1){

    const embed = new Discord.MessageEmbed()

  .setTitle("<:pico_dorado:937708034883465226> | CUEVA DORADA")
  .setDescription(`**${user}** \n\nHas minado en **CUEVA DORADA** y has encontrado: \n\n**GEMAS: \n**<:oro:937517645471825941> **Gema de Oro** (x${gemaoroT})`)
  .setThumbnail("https://media.discordapp.net/attachments/923453900571435053/937730582161555466/file.png")
  .setColor("#ebe342")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

  gemaoro.sumar(`${user.id}`, gemaoroT)
  }

  if(resultadofinal === resultadobueno2){

    const embed = new Discord.MessageEmbed()

  .setTitle("<:pico_dorado:937708034883465226> | CUEVA DORADA")
  .setDescription(`**${user}** \n\nHas minado en **CUEVA DORADA** y has encontrado: \n\n**GEMAS: \n**<:oro:937517645471825941> **Gema de Oro** (x${gemaoroT}) \n\n**MATERIALES:** \n<:roca:937228470109499413> **Roca** (x${rocaS}) \n<:tornillo:937112172327235635> **Tornillo** (x${tornilloS}) \n<:carbon:937106991178989608> **Carbon** (x${carbonS})`)
  .setThumbnail("https://media.discordapp.net/attachments/923453900571435053/937730582161555466/file.png")
  .setColor("#ebe342")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

  carbon.sumar(`${user.id}`, carbonS)
  roca.sumar(`${user.id}`, rocaS)
  tornillo.sumar(`${user.id}`, tornilloS)
  gemaoro.sumar(`${user.id}`, gemaoroT)
  }

  if(resultadofinal === resultadobueno3){

    const embed = new Discord.MessageEmbed()

  .setTitle("<:pico_dorado:937708034883465226> | CUEVA DORADA")
  .setDescription(`**${user}** \n\nHas minado en **CUEVA DORADA** y has encontrado: \n\n**GEMAS: \n**<:oro:937517645471825941> **Gema de Oro** (x${gemaoroT})`)
  .setThumbnail("https://media.discordapp.net/attachments/923453900571435053/937730582161555466/file.png")
  .setColor("#ebe342")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })


  gemaoro.sumar(`${user.id}`, gemaoroT)
  }

  if(resultadofinal === resultadobueno4){

    const embed = new Discord.MessageEmbed()

  .setTitle("<:pico_dorado:937708034883465226> | CUEVA DORADA")
  .setDescription(`**${user}** \n\nHas minado en **CUEVA DORADA** y has encontrado: \n\n**GEMAS: \n**<:oro:937517645471825941> **Gema de Oro** (x${gemaoroT}) \n\n**MATERIALES:** \n<:roca:937228470109499413> **Roca** (x${rocaS}) \n<:tornillo:937112172327235635> **Tornillo** (x${tornilloS}) \n<:carbon:937106991178989608> **Carbon** (x${carbonS})`)
  .setThumbnail("https://media.discordapp.net/attachments/923453900571435053/937730582161555466/file.png")
  .setColor("#ebe342")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

  carbon.sumar(`${user.id}`, carbonS)
  roca.sumar(`${user.id}`, rocaS)
  tornillo.sumar(`${user.id}`, tornilloS)
  gemaoro.sumar(`${user.id}`, gemaoroT)
  }

  if(resultadofinal === resultadobueno5){

    const embed = new Discord.MessageEmbed()

  .setTitle("<:pico_dorado:937708034883465226> | CUEVA DORADA")
  .setDescription(`**${user}** \n\nHas minado en **CUEVA DORADA** y has encontrado: \n\n**GEMAS: \n**<:oro:937517645471825941> **Gema de Oro** (x${gemaoroT})`)
  .setThumbnail("https://media.discordapp.net/attachments/923453900571435053/937730582161555466/file.png")
  .setColor("#ebe342")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

  gemaoro.sumar(`${user.id}`, gemaoroT)
  }

  if(resultadofinal === resultadobueno6){

    const embed = new Discord.MessageEmbed()

  .setTitle("<:pico_dorado:937708034883465226> | CUEVA DORADA")
  .setDescription(`**${user}** \n\nHas minado en **CUEVA DORADA** y has encontrado: \n\n**GEMAS: \n**<:oro:937517645471825941> **Gema de Oro** (x${gemaoroT}) \n\n**MATERIALES:** \n<:roca:937228470109499413> **Roca** (x${rocaS}) \n<:tornillo:937112172327235635> **Tornillo** (x${tornilloS}) \n<:carbon:937106991178989608> **Carbon** (x${carbonS})`)
  .setThumbnail("https://media.discordapp.net/attachments/923453900571435053/937730582161555466/file.png")
  .setColor("#ebe342")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

  carbon.sumar(`${user.id}`, carbonS)
  roca.sumar(`${user.id}`, rocaS)
  tornillo.sumar(`${user.id}`, tornilloS)
  gemaoro.sumar(`${user.id}`, gemaoroT)
  }

  if(resultadofinal === resultadobueno7){

    const embed = new Discord.MessageEmbed()

  .setTitle("<:pico_dorado:937708034883465226> | CUEVA DORADA")
  .setDescription(`**${user}** \n\nHas minado en **CUEVA DORADA** y has encontrado: \n\n**GEMAS: \n**<:oro:937517645471825941> **Gema de Oro** (x${gemaoroT})`)
  .setThumbnail("https://media.discordapp.net/attachments/923453900571435053/937730582161555466/file.png")
  .setColor("#ebe342")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })
  
  gemaoro.sumar(`${user.id}`, gemaoroT)
  }

  if(resultadofinal === resultadobueno8){

    const embed = new Discord.MessageEmbed()

  .setTitle("<:pico_dorado:937708034883465226> | CUEVA DORADA")
  .setDescription(`**${user}** \n\nHas minado en **CUEVA DORADA** y has encontrado: \n\n**GEMAS: \n**<:oro:937517645471825941> **Gema de Oro** (x${gemaoroT}) \n\n**MATERIALES:** \n<:roca:937228470109499413>  **Roca** (x${rocaS}) \n<:tornillo:937112172327235635> **Tornillo** (x${tornilloS}) \n<:carbon:937106991178989608> **Carbon** (x${carbonS})`)
  .setThumbnail("https://media.discordapp.net/attachments/923453900571435053/937730582161555466/file.png")
  .setColor("#ebe342")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

  carbon.sumar(`${user.id}`, carbonS)
  roca.sumar(`${user.id}`, rocaS)
  tornillo.sumar(`${user.id}`, tornilloS)
  gemaoro.sumar(`${user.id}`, gemaoroT)
  }

  if(resultadofinal === resultadobueno9){

    const embed = new Discord.MessageEmbed()

  .setTitle("<:pico_dorado:937708034883465226> | CUEVA DORADA")
  .setDescription(`**${user}** \n\nHas minado en **CUEVA DORADA** y has encontrado: \n\n**GEMAS: \n**<:oro:937517645471825941> **Gema de Oro** (x${gemaoroT})`)
  .setThumbnail("https://media.discordapp.net/attachments/923453900571435053/937730582161555466/file.png")
  .setColor("#ebe342")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

  gemaoro.sumar(`${user.id}`, gemaoroT)
  }

  if(resultadofinal === resultadobueno10){

    const embed = new Discord.MessageEmbed()

  .setTitle("<:pico_dorado:937708034883465226> | CUEVA DORADA")
  .setDescription(`**${user}** \n\nHas minado en **CUEVA DORADA** y has encontrado: \n\n**GEMAS: \n**<:oro:937517645471825941> **Gema de Oro** (x${gemaoroT})`)
  .setThumbnail("https://media.discordapp.net/attachments/923453900571435053/937730582161555466/file.png")
  .setColor("#ebe342")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

  gemaoro.sumar(`${user.id}`, gemaoroT)
  }


  if(resultadofinal === resultadomejor){

    const embed = new Discord.MessageEmbed()

  .setTitle("<:pico_dorado:937708034883465226> | CUEVA DORADA")
  .setDescription(`**${user}** \n\nHas minado en **CUEVA DORADA** y has encontrado: \n\n**GEMAS: \n**<:oro:937517645471825941> **Gema de Oro** (x${gemaoroT}) \n\n**MATERIALES:** \n<:roca:937228470109499413> **Roca** (x${rocaS}) \n<:tornillo:937112172327235635> **Tornillo** (x${tornilloS}) \n<:carbon:937106991178989608> **Carbon** (x${carbonS})\n\n**TESOROS:** \n<:boxclassic:925189484746801192> **Cajita Clasica** (x${cajitaclasicaT})`)
  .setThumbnail("https://media.discordapp.net/attachments/923453900571435053/937730582161555466/file.png")
  .setColor("#ebe342")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

  carbon.sumar(`${user.id}`, carbonS)
  roca.sumar(`${user.id}`, rocaS)
  tornillo.sumar(`${user.id}`, tornilloS)
  gemaoro.sumar(`${user.id}`, gemaoroT)
  cajitaclasica.sumar(`${user.id}`,  cajitaclasicaT)
  }
  }

  
  if(mina === '4'){

    const picoesmeraldaT = await picoesmeralda.obtener(`${user.id}`)

    if(picoesmeraldaT < 1) return message.reply({ content: "Necesitas <:pico_esmeralda:929936795515355226> **Pico Esmeralda** para minar esta zona", allowedMentions: { repliedUser: false } })

    let emerald = Math.floor(Math.random() * 10) + 1
    let papelS = Math.floor(Math.random() * 5) + 1
    let lazoS = Math.floor(Math.random() * 5) + 1
    let maderaS = Math.floor(Math.random() * 5) + 1
    let rocaS = Math.floor(Math.random() * 10) + 1
    let cofremagicoS = Math.floor(Math.random() * 1) + 1
    let picoesmeraldaE = Math.floor(Math.random() * 1) + 1
    let cajasecretaS = Math.floor(Math.random() * 1) + 1


  let resultadomalo = ['mal']
  let resultadobueno1 = ['bien1']
  let resultadobueno2 = ['bien2']
  let resultadobueno3 = ['bien3']
  let resultadobueno4 = ['bien4']
  let resultadobueno5 = ['bien5']
  let resultadobueno6 = ['bien6']
  let resultadobueno7 = ['bien7']
  let resultadobueno8 = ['bien8']
  let resultadobueno9 = ['bien9']
  let resultadobueno10 = ['bien10']
  let resultadomejor = ['mejor']
  let resultado = [resultadomalo, resultadobueno1, resultadobueno2, resultadobueno3, resultadobueno4, resultadobueno5, resultadomejor]
  let resultadofinal = resultado[Math.floor(Math.random() * resultado.length)]

  if(resultadofinal === resultadomalo){

   const embed = new Discord.MessageEmbed()

  .setTitle("<:pico_esmeralda:929936795515355226> | TEMPLO SECRETO")
  .setDescription(`**${user}** \n\nHas minado en **TEMPLO SECRETO** y has encontrado: \n\n**GEMAS:**\n<:esmeralda:925189523447611443> **Esmeralda** (x${emerald}) \n\n**MATERIALES**: \n<:papel:937517245049999453> **Papel** (x${papelS}) \n <:tabla_madera:937107087765418024> **Madera** (x${maderaS}) \n\n**PERDIDO:** \n<:pico_esmeralda:929936795515355226> **Pico Esmeralda** (x${picoesmeraldaE})`)
  .setThumbnail("https://art.ngfiles.com/images/576000/576814_kldpxl_mushroom-cave.gif")
  .setColor("#078b30")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

  esmeralda.sumar(`${user.id}`, emerald)
  papel.sumar(`${user.id}`, papelS)
  madera.sumar(`${user.id}`, maderaS)
  picoesmeralda.restar(`${user.id}`, picoesmeraldaE)
  }

  if(resultadofinal === resultadobueno1){

   const embed = new Discord.MessageEmbed()

  .setTitle("<:pico_esmeralda:929936795515355226> | TEMPLO SECRETO")
  .setDescription(`**${user}** \n\nHas minado en **TEMPLO SECRETO** y has encontrado: \n\n**GEMAS:**\n<:esmeralda:925189523447611443> **Esmeralda** (x${emerald})`)
  .setThumbnail("https://art.ngfiles.com/images/576000/576814_kldpxl_mushroom-cave.gif")
  .setColor("#078b30")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

  esmeralda.sumar(`${user.id}`, emerald)
  }

  if(resultadofinal === resultadobueno2){

   const embed = new Discord.MessageEmbed()

  .setTitle("<:pico_esmeralda:929936795515355226> | TEMPLO SECRETO")
  .setDescription(`**${user}** \n\nHas minado en **TEMPLO SECRETO** y has encontrado: \n\n**GEMAS:**\n<:esmeralda:925189523447611443> **Esmeralda** (x${emerald}) \n\n**MATERIALES**: \n<:papel:937517245049999453> **Papel** (x${papelS}) \n <:tabla_madera:937107087765418024> **Madera** (x${maderaS}) \n<:lazodecinta:937743481751867432> **Lazo** (x${lazoS})`)
  .setThumbnail("https://art.ngfiles.com/images/576000/576814_kldpxl_mushroom-cave.gif")
  .setColor("#078b30")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

  esmeralda.sumar(`${user.id}`, emerald)
  papel.sumar(`${user.id}`, papelS)
  lazo.sumar(`${user.id}`, lazoS)
  madera.sumar(`${user.id}`, maderaS)
  }

  if(resultadofinal === resultadobueno3){

  const embed = new Discord.MessageEmbed()

  .setTitle("<:pico_esmeralda:929936795515355226> | TEMPLO SECRETO")
  .setDescription(`**${user}** \n\nHas minado en **TEMPLO SECRETO** y has encontrado: \n\n**GEMAS:**\n<:esmeralda:925189523447611443> **Esmeralda** (x${emerald}) \n\n**MATERIALES**: \n <:tabla_madera:937107087765418024> **Madera** (x${maderaS}) \n<:lazodecinta:937743481751867432> **Lazo** (x${lazoS})`)
  .setThumbnail("https://art.ngfiles.com/images/576000/576814_kldpxl_mushroom-cave.gif")
  .setColor("#078b30")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

  esmeralda.sumar(`${user.id}`, emerald)
  lazo.sumar(`${user.id}`, lazoS)
  madera.sumar(`${user.id}`, maderaS)
  }

  if(resultadofinal === resultadobueno4){

  const embed = new Discord.MessageEmbed()

  .setTitle("<:pico_esmeralda:929936795515355226> | TEMPLO SECRETO")
  .setDescription(`**${user}** \n\nHas minado en **TEMPLO SECRETO** y has encontrado: \n\n**GEMAS:**\n<:esmeralda:925189523447611443> **Esmeralda** (x${emerald}) \n\n**MATERIALES**: \n<:papel:937517245049999453> **Papel** (x${papelS}) \n<:lazodecinta:937743481751867432> **Lazo** (x${lazoS})`)
  .setThumbnail("https://art.ngfiles.com/images/576000/576814_kldpxl_mushroom-cave.gif")
  .setColor("#078b30")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

  esmeralda.sumar(`${user.id}`, emerald)
  papel.sumar(`${user.id}`, papelS)
  lazo.sumar(`${user.id}`, lazoS)
  }

  if(resultadofinal === resultadobueno5){

   const embed = new Discord.MessageEmbed()

  .setTitle("<:pico_esmeralda:929936795515355226> | TEMPLO SECRETO")
  .setDescription(`**${user}** \n\nHas minado en **TEMPLO SECRETO** y has encontrado: \n\n**GEMAS:**\n<:esmeralda:925189523447611443> **Esmeralda** (x${emerald})`)
  .setThumbnail("https://art.ngfiles.com/images/576000/576814_kldpxl_mushroom-cave.gif")
  .setColor("#078b30")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

  esmeralda.sumar(`${user.id}`, emerald)
  }

  if(resultadofinal === resultadobueno6){

   const embed = new Discord.MessageEmbed()

  .setTitle("<:pico_esmeralda:929936795515355226> | TEMPLO SECRETO")
  .setDescription(`**${user}** \n\nHas minado en **TEMPLO SECRETO** y has encontrado: \n\n**GEMAS:**\n<:esmeralda:925189523447611443> **Esmeralda** (x${emerald})`)
  .setThumbnail("https://art.ngfiles.com/images/576000/576814_kldpxl_mushroom-cave.gif")
  .setColor("#078b30")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

  esmeralda.sumar(`${user.id}`, emerald)
  }

  if(resultadofinal === resultadobueno7){

   const embed = new Discord.MessageEmbed()

  .setTitle("<:pico_esmeralda:929936795515355226> | TEMPLO SECRETO")
  .setDescription(`**${user}** \n\nHas minado en **TEMPLO SECRETO** y has encontrado: \n\n**GEMAS:**\n<:esmeralda:925189523447611443> **Esmeralda** (x${emerald})`)
  .setThumbnail("https://art.ngfiles.com/images/576000/576814_kldpxl_mushroom-cave.gif")
  .setColor("#078b30")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

  esmeralda.sumar(`${user.id}`, emerald)
  }

  if(resultadofinal === resultadobueno8){

   const embed = new Discord.MessageEmbed()

  .setTitle("<:pico_esmeralda:929936795515355226> | TEMPLO SECRETO")
  .setDescription(`**${user}** \n\nHas minado en **TEMPLO SECRETO** y has encontrado: \n\n**GEMAS:**\n<:esmeralda:925189523447611443> **Esmeralda** (x${emerald}) \n\n**MATERIALES**: \n<:papel:937517245049999453> **Papel** (x${papelS}) \n <:tabla_madera:937107087765418024> **Madera** (x${maderaS}) \n<:lazodecinta:937743481751867432> **Lazo** (x${lazoS})`)
  .setThumbnail("https://art.ngfiles.com/images/576000/576814_kldpxl_mushroom-cave.gif")
  .setColor("#078b30")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

  esmeralda.sumar(`${user.id}`, emerald)
  papel.sumar(`${user.id}`, papelS)
  lazo.sumar(`${user.id}`, lazoS)
  madera.sumar(`${user.id}`, maderaS)
  }

  if(resultadofinal === resultadobueno9){

   const embed = new Discord.MessageEmbed()

  .setTitle("<:pico_esmeralda:929936795515355226> | TEMPLO SECRETO")
  .setDescription(`**${user}** \n\nHas minado en **TEMPLO SECRETO** y has encontrado: \n\n**GEMAS:**\n<:esmeralda:925189523447611443> **Esmeralda** (x${emerald}) \n\n**MATERIALES**: \n<:papel:937517245049999453> **Papel** (x${papelS}) \n <:tabla_madera:937107087765418024> **Madera** (x${maderaS}) \n<:lazodecinta:937743481751867432> **Lazo** (x${lazoS})`)
  .setThumbnail("https://art.ngfiles.com/images/576000/576814_kldpxl_mushroom-cave.gif")
  .setColor("#078b30")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

  esmeralda.sumar(`${user.id}`, emerald)
  papel.sumar(`${user.id}`, papelS)
  lazo.sumar(`${user.id}`, lazoS)
  madera.sumar(`${user.id}`, maderaS)
  }

  if(resultadofinal === resultadobueno10){

   const embed = new Discord.MessageEmbed()

  .setTitle("<:pico_esmeralda:929936795515355226> | TEMPLO SECRETO")
  .setDescription(`**${user}** \n\nHas minado en **TEMPLO SECRETO** y has encontrado: \n\n**GEMAS:**\n<:esmeralda:925189523447611443> **Esmeralda** (x${emerald}) \n\n**MATERIALES**: \n<:papel:937517245049999453> **Papel** (x${papelS}) \n\nTESOROS: \n<:cofremagico:925189505428910141> **Cofe Magico** (x${cofremagicoS})`)
  .setThumbnail("https://art.ngfiles.com/images/576000/576814_kldpxl_mushroom-cave.gif")
  .setColor("#078b30")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

  esmeralda.sumar(`${user.id}`, emerald)
  papel.sumar(`${user.id}`, papelS)
  cofremagico.sumar(`${user.id}`, cofremagicoS)
  }

  if(resultadofinal === resultadomejor){

    const embed = new Discord.MessageEmbed()

  .setTitle("<:pico_esmeralda:929936795515355226> | TEMPLO SECRETO")
  .setDescription(`**${user}** \n\nHas minado en **TEMPLO SECRETO** y has encontrado: \n\n**GEMAS:**\n<:esmeralda:925189523447611443> **Esmeralda** (x${emerald}) \n\n**MATERIALES**: \n<:papel:937517245049999453> **Papel** (x${papelS}) \n <:tabla_madera:937107087765418024> **Madera** (x${maderaS}) \n<:lazodecinta:937743481751867432> **Lazo** (x${lazoS}) \n\n**TESOROS:** \n<:box_secret:937114886784315482> **Cajita Secreta** (x${cajasecretaS})\n<:cofremagico:925189505428910141> **Cofre Magico** (x${cofremagicoS})`)
  .setThumbnail("https://art.ngfiles.com/images/576000/576814_kldpxl_mushroom-cave.gif")
  .setColor("#078b30")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

  esmeralda.sumar(`${user.id}`, emerald)
  papel.sumar(`${user.id}`, papelS)
  lazo.sumar(`${user.id}`, lazoS)
  madera.sumar(`${user.id}`, maderaS)
  cofremagico.sumar(`${user.id}`, cofremagicoS)
  cajasecreta.sumar(`${user.id}`, cajasecretaS)
  }
}

  

  if(mina === '5'){

    const picomikzuT = await picomikzu.obtener(`${user.id}`)

    if(picomikzuT < 1) return message.reply({ content: "Necesitas <:pico_mikzu:929932128668499988> **Pico Mikzu** para minar esta zona", allowedMentions: { repliedUser: false } })

    let gemikzu = Math.floor(Math.random() * 10) + 1
    let cajacartonS = Math.floor(Math.random() * 5) + 1
    let rocaS = Math.floor(Math.random() * 5) + 1
    let piedraS = Math.floor(Math.random() * 5) + 1
    let cajitasupremeS = Math.floor(Math.random() * 1) + 1
    let pistolaS = Math.floor(Math.random() * 1) + 1
    let picomikzuE = Math.floor(Math.random() * 1) + 1

  
  let resultadomalo = ['mal']
  let resultadobueno1 = ['bien1']
  let resultadobueno2 = ['bien2']
  let resultadobueno3 = ['bien3']
  let resultadobueno4 = ['bien4']
  let resultadobueno5 = ['bien5']
  let resultadobueno6 = ['bien6']
  let resultadobueno7 = ['bien7']
  let resultadobueno8 = ['bien8']
  let resultadobueno9 = ['bien9']
  let resultadobueno10 = ['bien10']
  let resultadomejor = ['mejor']
  let resultado = [resultadomalo, resultadobueno1, resultadobueno2, resultadobueno3, resultadobueno4, resultadobueno5, resultadomejor]
  let resultadofinal = resultado[Math.floor(Math.random() * resultado.length)]

  if(resultadofinal === resultadomalo){

   const embed = new Discord.MessageEmbed()

  .setTitle("<:pico_mikzu:929932128668499988> | CAVERNA MAGICA")
  .setDescription(`**${user}** \n\nHas minado en **CAVERNA MAGICA** y has encontrado: \n\n**GEMAS:\n**<:gema_mikzu:925189528598237254> **Gema Mikzu** (x${gemikzu}) \n\n**PERDIDO:** \n <:pico_mikzu:929932128668499988> **Pico Mikzu** (x${picomikzuE})`)
  .setThumbnail("https://i.pinimg.com/originals/54/1b/9f/541b9febbb6d1ea18ed9da9baca16396.gif")
  .setColor("#ba24f5")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

  gemamikzu.sumar(`${user.id}`, gemikzu)
  picomikzu.restar(`${user.id}`, 1)
  }

  if(resultadofinal === resultadobueno1){

   const embed = new Discord.MessageEmbed()

  .setTitle("<:pico_mikzu:929932128668499988> | CAVERNA MAGICA")
  .setDescription(`**${user}** \nHas minado en **CAVERNA MAGICA** y has encontrado\n\n**GEMAS:**\n<:gema_mikzu:925189528598237254>**Gema Mikzu** (x${gemikzu})`)
  .setThumbnail("https://i.pinimg.com/originals/54/1b/9f/541b9febbb6d1ea18ed9da9baca16396.gif")
  .setColor("#ba24f5")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

  gemamikzu.sumar(`${user.id}`, gemikzu)
  }

  if(resultadofinal === resultadobueno2){

   const embed = new Discord.MessageEmbed()

  .setTitle("<:pico_mikzu:929932128668499988> | CAVERNA MAGICA")
  .setDescription(`**${user}** \nHas minado en **CAVERNA MAGICA** y has encontrado\n\n**GEMAS:**\n<:gema_mikzu:925189528598237254>**Gema Mikzu** (x${gemikzu})`)
  .setThumbnail("https://i.pinimg.com/originals/54/1b/9f/541b9febbb6d1ea18ed9da9baca16396.gif")
  .setColor("#ba24f5")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

  gemamikzu.sumar(`${user.id}`, gemikzu)
  }

  if(resultadofinal === resultadobueno3){

  const embed = new Discord.MessageEmbed()

  .setTitle("<:pico_mikzu:929932128668499988> | CAVERNA MAGICA")
  .setDescription(`**${user}** \nHas minado en **CAVERNA MAGICA** y has encontrado\n\n**GEMAS:**\n<:gema_mikzu:925189528598237254>**Gema Mikzu** (x${gemikzu})`)
  .setThumbnail("https://i.pinimg.com/originals/54/1b/9f/541b9febbb6d1ea18ed9da9baca16396.gif")
  .setColor("#ba24f5")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

  gemamikzu.sumar(`${user.id}`, gemikzu)
  }

  if(resultadofinal === resultadobueno4){

  const embed = new Discord.MessageEmbed()

  .setTitle("<:pico_mikzu:929932128668499988> | CAVERNA MAGICA")
  .setDescription(`**${user}** \nHas minado en **CAVERNA MAGICA** y has encontrado\n\n**GEMAS:**\n<:gema_mikzu:925189528598237254>**Gema Mikzu** (x${gemikzu})`)
  .setThumbnail("https://i.pinimg.com/originals/54/1b/9f/541b9febbb6d1ea18ed9da9baca16396.gif")
  .setColor("#ba24f5")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

  gemamikzu.sumar(`${user.id}`, gemikzu)
  cajitasupreme.sumar(`${user.id}`, cajitasupremeS)
 
  }

  if(resultadofinal === resultadobueno5){

   const embed = new Discord.MessageEmbed()

  .setTitle("<:pico_mikzu:929932128668499988> | CAVERNA MAGICA")
  .setDescription(`**${user}** \nHas minado en **CAVERNA MAGICA** y has encontrado\n\n**GEMAS:**\n<:gema_mikzu:925189528598237254>**Gema Mikzu** (x${gemikzu})\n\n**MATERIALES:**\n<:caja:937221185673003010> **Caja de Cartón** (x${cajacartonS})\n<:roca:937228470109499413> **Roca** (x${rocaS})`)
  .setThumbnail("https://i.pinimg.com/originals/54/1b/9f/541b9febbb6d1ea18ed9da9baca16396.gif")
  .setColor("#ba24f5")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

  gemamikzu.sumar(`${user.id}`, gemikzu)
  cajacarton.sumar(`${user.id}`, cajacartonS)
  roca.sumar(`${user.id}`, rocaS)

  }

  if(resultadofinal === resultadobueno6){

   const embed = new Discord.MessageEmbed()

  .setTitle("<:pico_mikzu:929932128668499988> | CAVERNA MAGICA")
  .setDescription(`**${user}** \nHas minado en **CAVERNA MAGICA** y has encontrado\n\n**GEMAS:**\n<:gema_mikzu:925189528598237254>**Gema Mikzu** (x${gemikzu})\n\n**MATERIALES:**\n<:caja:937221185673003010> **Caja de Cartón** (x${cajacartonS})\n<:roca:937228470109499413> **Roca** (x${rocaS})`)
  .setThumbnail("https://i.pinimg.com/originals/54/1b/9f/541b9febbb6d1ea18ed9da9baca16396.gif")
  .setColor("#ba24f5")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

  gemamikzu.sumar(`${user.id}`, gemikzu)
  cajacarton.sumar(`${user.id}`, cajacartonS)
  roca.sumar(`${user.id}`, rocaS)
  }

  if(resultadofinal === resultadobueno7){

   const embed = new Discord.MessageEmbed()

  .setTitle("<:pico_mikzu:929932128668499988> | CAVERNA MAGICA")
  .setDescription(`**${user}** \nHas minado en **CAVERNA MAGICA** y has encontrado\n\n**GEMAS:**\n<:gema_mikzu:925189528598237254>**Gema Mikzu** (x${gemikzu})\n\n**MATERIALES:**\n<:caja:937221185673003010> **Caja de Cartón** (x${cajacartonS})\n\n**TESOROS:**\n<:pistola:925289400877867038> **Pistola** (x${pistolaS})`)
  .setThumbnail("https://i.pinimg.com/originals/54/1b/9f/541b9febbb6d1ea18ed9da9baca16396.gif")
  .setColor("#ba24f5")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

  gemamikzu.sumar(`${user.id}`, gemikzu)
  cajacarton.sumar(`${user.id}`, cajacartonS)
  pistola.sumar(`${user.id}`, pistolaS)
  }

  if(resultadofinal === resultadobueno8){

   const embed = new Discord.MessageEmbed()

  .setTitle("<:pico_mikzu:929932128668499988> | CAVERNA MAGICA")
  .setDescription(`**${user}** \nHas minado en **CAVERNA MAGICA** y has encontrado\n\n**GEMAS:**\n<:gema_mikzu:925189528598237254>**Gema Mikzu** (x${gemikzu})\n\n**MATERIALES:**\n<:caja:937221185673003010> **Caja de Cartón** (x${cajacartonS})\n<:roca:937228470109499413> **Roca** (x${rocaS})\n<:piedra:937218501024841838> **Piedra** (x${piedraS})`)
  .setThumbnail("https://i.pinimg.com/originals/54/1b/9f/541b9febbb6d1ea18ed9da9baca16396.gif")
  .setColor("#ba24f5")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

  gemamikzu.sumar(`${user.id}`, gemikzu)
  cajacarton.sumar(`${user.id}`, cajacartonS)
  roca.sumar(`${user.id}`, rocaS)
  piedra.sumar(`${user.id}`, piedraS)
  }

  if(resultadofinal === resultadobueno9){

   const embed = new Discord.MessageEmbed()

  .setTitle("<:pico_mikzu:929932128668499988> | CAVERNA MAGICA")
  .setDescription(`**${user}** \nHas minado en **CAVERNA MAGICA** y has encontrado\n\n**GEMAS:**\n<:gema_mikzu:925189528598237254>**Gema Mikzu** (x${gemikzu})\n\n**MATERIALES:**\n<:roca:937228470109499413> **Roca** (x${rocaS})\n<:piedra:937218501024841838> **Piedra** (x${piedraS})`)
  .setThumbnail("https://i.pinimg.com/originals/54/1b/9f/541b9febbb6d1ea18ed9da9baca16396.gif")
  .setColor("#ba24f5")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

  gemamikzu.sumar(`${user.id}`, gemikzu)
  roca.sumar(`${user.id}`, rocaS)
  piedra.sumar(`${user.id}`, piedraS)
  }

  if(resultadofinal === resultadobueno10){

   const embed = new Discord.MessageEmbed()

  .setTitle("<:pico_mikzu:929932128668499988> | CAVERNA MAGICA")
  .setDescription(`**${user}** \nHas minado en **CAVERNA MAGICA** y has encontrado\n\n**GEMAS:**\n<:gema_mikzu:925189528598237254>**Gema Mikzu** (x${gemikzu})\n\n**MATERIALES:**\n<:caja:937221185673003010> **Caja de Cartón** (x${cajacartonS})\n<:roca:937228470109499413> **Roca** (x${rocaS})`)
  .setThumbnail("https://i.pinimg.com/originals/54/1b/9f/541b9febbb6d1ea18ed9da9baca16396.gif")
  .setColor("#ba24f5")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

  gemamikzu.sumar(`${user.id}`, gemikzu)
  cajacarton.sumar(`${user.id}`, cajacartonS)
  roca.sumar(`${user.id}`, rocaS)
  }

  if(resultadofinal === resultadomejor){

    const embed = new Discord.MessageEmbed()

  .setTitle("<:pico_mikzu:929932128668499988> | CAVERNA MAGICA")
  .setDescription(`**${user}** \nHas minado en **CAVERNA MAGICA** y has encontrado\n\n**GEMAS:**\n<:gema_mikzu:925189528598237254>**Gema Mikzu** (x${gemikzu})\n\n**MATERIALES:**\n<:caja:937221185673003010> **Caja de Cartón** (x${cajacartonS})\n<:roca:937228470109499413> **Roca** (x${rocaS})\n<:piedra:937218501024841838> **Piedra** (x${piedraS})\n\n**TESOROS:**\n<:supremebox:925189513666506782> **Cajita Supreme** (x${cajitasupremeS})\n<:pistola:925289400877867038> **Pistola** (x${pistolaS})`)
  .setThumbnail("https://i.pinimg.com/originals/54/1b/9f/541b9febbb6d1ea18ed9da9baca16396.gif")
  .setColor("#ba24f5")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

  gemamikzu.sumar(`${user.id}`, gemikzu)
  cajacarton.sumar(`${user.id}`, cajacartonS)
  roca.sumar(`${user.id}`, rocaS)
  piedra.sumar(`${user.id}`, piedraS)
  cajitasupreme.sumar(`${user.id}`, cajitasupremeS)
  pistola.sumar(`${user.id}`, pistolaS)
  }
}


  
  if(mina === '6'){

    const picolixsaT = await picolixsa.obtener(`${user.id}`)

    if(picolixsaT < 1) return message.reply({ content: "Necesitas <:pico_lixsa:929933120193568788> **Pico Lixsa** para minar esta zona", allowedMentions: { repliedUser: false } })

    let diamantelixsa = Math.floor(Math.random() * 10) + 1
    let aceroS = Math.floor(Math.random() * 5) + 1
    let aluminioS = Math.floor(Math.random() * 5) + 1
    let piedraS = Math.floor(Math.random() * 5) + 1
    let cajitasupremeS = Math.floor(Math.random() * 1) + 1
    let pistolaS = Math.floor(Math.random() * 1) + 1
    let picolixsaE = Math.floor(Math.random() * 1) + 1

  let resultadomalo = ['mal']
  let resultadobueno1 = ['bien1']
  let resultadobueno2 = ['bien2']
  let resultadobueno3 = ['bien3']
  let resultadobueno4 = ['bien4']
  let resultadobueno5 = ['bien5']
  let resultadobueno6 = ['bien6']
  let resultadobueno7 = ['bien7']
  let resultadobueno8 = ['bien8']
  let resultadobueno9 = ['bien9']
  let resultadobueno10 = ['bien10']
  let resultadomejor = ['mejor']
  let resultado = [resultadomalo, resultadobueno1, resultadobueno2, resultadobueno3, resultadobueno4, resultadobueno5, resultadomejor]
  let resultadofinal = resultado[Math.floor(Math.random() * resultado.length)]

  if(resultadofinal === resultadomalo){

   const embed = new Discord.MessageEmbed()

  .setTitle("<:pico_lixsa:929933120193568788> | CAVERNA SAGRADA")
  .setDescription(`**${user}** \nHas minado en **CAVERNA SAGRADA** y has encontrado\n\n**GEMAS:**\n<:lixsa_diamond:925189859893715005>**Diamante Lixsa** (x${diamantelixsa})\n\n**MATERIALES:**\n<:acero:937106942713802762> **Acero** (x${aceroS})\n\n**PERDIDO:**\n<:pico_lixsa:929933120193568788> Pico Lixsa (x${picolixsaE})`)
  .setThumbnail("https://cdnb.artstation.com/p/assets/images/images/029/540/875/original/santiago-banol-sheroma-cavern-events-3.gif")
  .setColor("#2a99db")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

  diamondlixsa.sumar(`${user.id}`, diamantelixsa)
  acero.sumar(`${user.id}`, aceroS)
  picolixsa.restar(`${user.id}`, 1)
  }

  if(resultadofinal === resultadobueno1){

   const embed = new Discord.MessageEmbed()

  .setTitle("<:pico_lixsa:929933120193568788> | CAVERNA SAGRADA")
  .setDescription(`**${user}** \nHas minado en **CAVERNA SAGRADA** y has encontrado\n\n**GEMAS:**\n<:lixsa_diamond:925189859893715005>**Diamante Lixsa** (x${diamantelixsa})\n\n**MATERIALES:**\n<:acero:937106942713802762> **Acero** (x${aceroS})\n<:aluminio:937218534973517854> **Aluminio** (x${aluminioS})\n<:piedra:937218501024841838> **Piedra** (x${piedraS})`)
  .setThumbnail("https://cdnb.artstation.com/p/assets/images/images/029/540/875/original/santiago-banol-sheroma-cavern-events-3.gif")
  .setColor("#2a99db")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

  diamondlixsa.sumar(`${user.id}`, diamantelixsa)
  acero.sumar(`${user.id}`, aceroS)
  aluminio.sumar(`${user.id}`, aluminioS)
  piedra.sumar(`${user.id}`, piedraS)
  }

  if(resultadofinal === resultadobueno2){

   const embed = new Discord.MessageEmbed()

  .setTitle("<:pico_lixsa:929933120193568788> | CAVERNA SAGRADA")
  .setDescription(`**${user}** \nHas minado en **CAVERNA SAGRADA** y has encontrado\n\n**GEMAS:**\n<:lixsa_diamond:925189859893715005>**Diamante Lixsa** (x${diamantelixsa})\n\n**MATERIALES:**\n<:acero:937106942713802762> **Acero** (x${aceroS})\n<:aluminio:937218534973517854> **Aluminio** (x${aluminioS})\n<:piedra:937218501024841838> **Piedra** (x${piedraS})`)
  .setThumbnail("https://cdnb.artstation.com/p/assets/images/images/029/540/875/original/santiago-banol-sheroma-cavern-events-3.gif")
  .setColor("#2a99db")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

  diamondlixsa.sumar(`${user.id}`, diamantelixsa)
  acero.sumar(`${user.id}`, aceroS)
  aluminio.sumar(`${user.id}`, aluminioS)
  piedra.sumar(`${user.id}`, piedraS)
  }

  if(resultadofinal === resultadobueno3){

  const embed = new Discord.MessageEmbed()

  .setTitle("<:pico_lixsa:929933120193568788> | CAVERNA SAGRADA")
  .setDescription(`**${user}** \nHas minado en **CAVERNA SAGRADA** y has encontrado\n\n**GEMAS:**\n<:lixsa_diamond:925189859893715005>**Diamante Lixsa** (x${diamantelixsa})\n\n**MATERIALES:**\n<:acero:937106942713802762> **Acero** (x${aceroS})\n<:aluminio:937218534973517854> **Aluminio** (x${aluminioS})\n<:piedra:937218501024841838> **Piedra** (x${piedraS})`)
  .setThumbnail("https://cdnb.artstation.com/p/assets/images/images/029/540/875/original/santiago-banol-sheroma-cavern-events-3.gif")
  .setColor("#2a99db")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

  diamondlixsa.sumar(`${user.id}`, diamantelixsa)
  acero.sumar(`${user.id}`, aceroS)
  aluminio.sumar(`${user.id}`, aluminioS)
  piedra.sumar(`${user.id}`, piedraS)
  }

  if(resultadofinal === resultadobueno4){

  const embed = new Discord.MessageEmbed()

  .setTitle("<:pico_lixsa:929933120193568788> | CAVERNA SAGRADA")
  .setDescription(`**${user}** \nHas minado en **CAVERNA SAGRADA** y has encontrado\n\n**GEMAS:**\n<:lixsa_diamond:925189859893715005>**Diamante Lixsa** (x${diamantelixsa})\n\n**MATERIALES:**\n<:piedra:937218501024841838> **Piedra** (x${piedraS})\n\n**TESOROS:**\n<:supremebox:925189513666506782> **Cajita Supreme** (x${cajitasupremeS})`)
  .setThumbnail("https://cdnb.artstation.com/p/assets/images/images/029/540/875/original/santiago-banol-sheroma-cavern-events-3.gif")
  .setColor("#2a99db")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

  diamondlixsa.sumar(`${user.id}`, diamantelixsa)
  piedra.sumar(`${user.id}`, piedraS)
  cajitasupreme.sumar(`${user.id}`, cajitasupremeS)
 
  }

  if(resultadofinal === resultadobueno5){

   const embed = new Discord.MessageEmbed()

  .setTitle("<:pico_lixsa:929933120193568788> | CAVERNA SAGRADA")
  .setDescription(`**${user}** \nHas minado en **CAVERNA SAGRADA** y has encontrado\n\n**GEMAS:**\n<:lixsa_diamond:925189859893715005>**Diamante Lixsa** (x${diamantelixsa})\n\n**MATERIALES:**\n<:acero:937106942713802762> **Acero** (x${aceroS})\n<:piedra:937218501024841838> **Piedra** (x${piedraS})`)
  .setThumbnail("https://cdnb.artstation.com/p/assets/images/images/029/540/875/original/santiago-banol-sheroma-cavern-events-3.gif")
  .setColor("#2a99db")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

  diamondlixsa.sumar(`${user.id}`, diamantelixsa)
  acero.sumar(`${user.id}`, aceroS)
  piedra.sumar(`${user.id}`, piedraS)

  }

  if(resultadofinal === resultadobueno6){

   const embed = new Discord.MessageEmbed()

  .setTitle("<:pico_lixsa:929933120193568788> | CAVERNA SAGRADA")
  .setDescription(`**${user}** \nHas minado en **CAVERNA SAGRADA** y has encontrado\n\n**GEMAS:**\n<:lixsa_diamond:925189859893715005>**Diamante Lixsa** (x${diamantelixsa})\n\n**MATERIALES:**\n<:acero:937106942713802762> **Acero** (x${aceroS})\n<:aluminio:937218534973517854> **Aluminio** (x${aluminioS})`)
  .setThumbnail("https://cdnb.artstation.com/p/assets/images/images/029/540/875/original/santiago-banol-sheroma-cavern-events-3.gif")
  .setColor("#2a99db")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

  diamondlixsa.sumar(`${user.id}`, diamantelixsa)
  acero.sumar(`${user.id}`, aceroS)
  aluminio.sumar(`${user.id}`, aluminioS)
  }

  if(resultadofinal === resultadobueno7){

   const embed = new Discord.MessageEmbed()

  .setTitle("<:pico_lixsa:929933120193568788> | CAVERNA SAGRADA")
  .setDescription(`**${user}** \nHas minado en **CAVERNA SAGRADA** y has encontrado\n\n**GEMAS:**\n<:lixsa_diamond:925189859893715005>**Diamante Lixsa** (x${diamantelixsa})`)
  .setThumbnail("https://cdnb.artstation.com/p/assets/images/images/029/540/875/original/santiago-banol-sheroma-cavern-events-3.gif")
  .setColor("#2a99db")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

  diamondlixsa.sumar(`${user.id}`, diamantelixsa)
  }

  if(resultadofinal === resultadobueno8){

   const embed = new Discord.MessageEmbed()

  .setTitle("<:pico_lixsa:929933120193568788> | CAVERNA SAGRADA")
  .setDescription(`**${user}** \nHas minado en **CAVERNA SAGRADA** y has encontrado\n\n**GEMAS:**\n<:lixsa_diamond:925189859893715005>**Diamante Lixsa** (x${diamantelixsa})`)
  .setThumbnail("https://cdnb.artstation.com/p/assets/images/images/029/540/875/original/santiago-banol-sheroma-cavern-events-3.gif")
  .setColor("#2a99db")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

  diamondlixsa.sumar(`${user.id}`, diamantelixsa)
  }

  if(resultadofinal === resultadobueno9){

   const embed = new Discord.MessageEmbed()

  .setTitle("<:pico_lixsa:929933120193568788> | CAVERNA SAGRADA")
  .setDescription(`**${user}** \nHas minado en **CAVERNA SAGRADA** y has encontrado\n\n**GEMAS:**\n<:lixsa_diamond:925189859893715005>**Diamante Lixsa** (x${diamantelixsa})`)
  .setThumbnail("https://cdnb.artstation.com/p/assets/images/images/029/540/875/original/santiago-banol-sheroma-cavern-events-3.gif")
  .setColor("#2a99db")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

  diamondlixsa.sumar(`${user.id}`, diamantelixsa)
  }

  if(resultadofinal === resultadobueno10){

   const embed = new Discord.MessageEmbed()

  .setTitle("<:pico_lixsa:929933120193568788> | CAVERNA SAGRADA")
  .setDescription(`**${user}** \nHas minado en **CAVERNA SAGRADA** y has encontrado\n\n**GEMAS:**\n<:lixsa_diamond:925189859893715005>**Diamante Lixsa** (x${diamantelixsa})`)
  .setThumbnail("https://cdnb.artstation.com/p/assets/images/images/029/540/875/original/santiago-banol-sheroma-cavern-events-3.gif")
  .setColor("#2a99db")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

  diamondlixsa.sumar(`${user.id}`, diamantelixsa)
  }

  if(resultadofinal === resultadomejor){

    const embed = new Discord.MessageEmbed()

  .setTitle("<:pico_lixsa:929933120193568788> | CAVERNA SAGRADA")
  .setDescription(`**${user}** \nHas minado en **CAVERNA SAGRADA** y has encontrado\n\n**GEMAS:**\n<:lixsa_diamond:925189859893715005>**Diamante Lixsa** (x${diamantelixsa})\n\n**MATERIALES:**\n<:acero:937106942713802762> **Acero** (x${aceroS})\n<:aluminio:937218534973517854> **Aluminio** (x${aluminioS})\n<:piedra:937218501024841838> **Piedra** (x${piedraS})\n\n**TESOROS:**\n<:supremebox:925189513666506782> **Cajita Supreme** (x${cajitasupremeS})\n<:pistola:925289400877867038> **Pistola** (x${pistolaS})`)
  .setThumbnail("https://cdnb.artstation.com/p/assets/images/images/029/540/875/original/santiago-banol-sheroma-cavern-events-3.gif")
  .setColor("#2a99db")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

  diamondlixsa.sumar(`${user.id}`, diamantelixsa)
  acero.sumar(`${user.id}`, aceroS)
  aluminio.sumar(`${user.id}`, aluminioS)
  piedra.sumar(`${user.id}`, piedraS)
  cajitasupreme.sumar(`${user.id}`, cajitasupremeS)
  pistola.sumar(`${user.id}`, pistolaS)
  }
 }

 cooldown.add(message.author.id);
  
  setTimeout(() => {
    cooldown.delete(message.author.id);
  }, 60000);
}
}