const Discord = require('discord.js');
const db = require('megadb')
const diamante = new db.crearDB('diamante')
const diamanterosa = new db.crearDB('diamanterosa')
const gemaoro = new db.crearDB('gemaoro')
const esmeralda = new db.crearDB('esmeralda')
const gemamikzu = new db.crearDB('gemamikzu')
const diamondlixsa = new db.crearDB('diamondlixsa')
const canadiamante = new db.crearDB('canadiamante')
const canarosa = new db.crearDB('canarosa')
const canadorado = new db.crearDB('canadorado')
const canaesmeralda = new db.crearDB('canaesmeralda')
const canamikzu = new db.crearDB('canamikzu')
const canalixsa = new db.crearDB('canalixsa')
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
  name: "fish", 
  alias: [], 

async execute (client, message, args){

  const pesca = args.join(' ')
  if(!pesca) return message.reply({ content: "Debes elejir una zona donde pescar", allowedMentions: { repliedUser: false } })

  const user = message.author;

  const zonas = ["0", "1", "2", "3", "4", "5", "6"]

  const zonaMsg = args[0];

  if(!zonaMsg){
  
  }

  if(!zonas.includes(zonas[parseInt(zonaMsg)])) return message.reply({ content: "Esta Zona no Existe >:u", allowedMentions: { repliedUser: false } });

  // el demas code…


  if(cooldown.has(message.author.id)){
    
    const embedcol = new Discord.MessageEmbed()
  .setAuthor(user.tag, user.displayAvatarURL())
  .setTitle("<:relojdearena:925189519773421578> DESCANSO <:relojdearena:925189519773421578>")
  .setDescription(`No te sientes cansad@ ${user}? \nRegresa en <:relojdearena:925189519773421578> **3 MINUTOS** para volver a pescar`)
  .setThumbnail("https://media.discordapp.net/attachments/923453900571435053/925188789289242696/reloj_de_arena.png?width=422&height=422")
  .setColor('#eb76f7')

    message.reply({ embeds: [embedcol], allowedMentions: { repliedUser: false } });

    return;
  }

  if (!diamante.tiene(`${user.id}`))
    diamante.establecer(`${user.id}`, 0)
  if (!diamanterosa.tiene(`${user.id}`))
    diamanterosa.establecer(`${user.id}`, 0)
  if (!esmeralda.tiene(`${user.id}`))
    esmeralda.establecer(`${user.id}`, 0)
  if (!gemamikzu.tiene(`${user.id}`))
    gemamikzu.establecer(`${user.id}`, 0)
  if (!diamondlixsa.tiene(`${user.id}`))
    diamondlixsa.establecer(`${user.id}`, 0)

  if (!canadiamante.tiene(`${user.id}`))
  canadiamante.establecer(`${user.id}`, 0)
if (!canarosa.tiene(`${user.id}`))
  canarosa.establecer(`${user.id}`, 0)
if (!canadorado.tiene(`${user.id}`))
  canadorado.establecer(`${user.id}`, 0)
if (!canaesmeralda.tiene(`${user.id}`))
  canaesmeralda.establecer(`${user.id}`, 0)
if (!canamikzu.tiene(`${user.id}`))
  canamikzu.establecer(`${user.id}`, 0)
if (!canalixsa.tiene(`${user.id}`))
  canalixsa.establecer(`${user.id}`, 0)
  
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

 
 

  if(pesca === '1'){

  const canadiamanteT = await canadiamante.obtener(`${user.id}`)
    
  if(canadiamanteT < 1) return message.reply({ content: "Necesitas <:caa:925189522742992946> **Caña Diamante** para pescar esta zona", allowedMentions: { repliedUser: false } })

  let carbonS = Math.floor(Math.random() * 10) + 1
  let aluminioS = Math.floor(Math.random() * 10) + 1
  let rocaS = Math.floor(Math.random() * 10) + 1
  let canadiamanteE = Math.floor(Math.random() * 1) + 1
  let diamond = Math.floor(Math.random() * 50) + 1
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

  .setTitle("<:caa:925189522742992946> | PLAYA")
  .setDescription(`**${user}** \n\nHas pescado en la **PLAYA** y has encontrado\n\n**GEMAS:**\n<:diamante:925189523397287967> **Diamante** (x${diamond}) \n\n**MATERIALES:**\n<:carbon:937106991178989608> **Carbón** (x${carbonS}) \n<:roca:937228470109499413> **Roca** (x${rocaS}) \n\n**PERDIDO:** \n<:pico:925189526798876743> **Caña Diamante** (x${canadiamanteE})`)
  .setThumbnail("https://animesher.com/orig/1/166/1665/16658/animesher.com_gif-sea-pixels-1665834.gif")
  .setColor("#1d64a3")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

  diamante.sumar(`${user.id}`, diamond)
  carbon.sumar(`${user.id}`, carbonS)
  roca.sumar(`${user.id}`, rocaS)
  canadiamante.restar(`${user.id}`, 1)
  }

  if(resultadofinal === resultadobueno1){

   const embed = new Discord.MessageEmbed()

  .setTitle("<:caa:925189522742992946> | PLAYA")
  .setDescription(`**${user}** \nHas pescado en **PLAYA** y has encontrado\n\n**GEMAS:**\n<:diamante:925189523397287967> **Diamante** (x${diamond})\n\n**MATERIALES:**\n<:roca:937228470109499413> **Roca** (x${rocaS})`)
  .setThumbnail("https://animesher.com/orig/1/166/1665/16658/animesher.com_gif-sea-pixels-1665834.gif")
  .setColor("#1d64a3")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

  diamante.sumar(`${user.id}`, diamond)
  roca.sumar(`${user.id}`, rocaS)
  }

  if(resultadofinal === resultadobueno2){

   const embed = new Discord.MessageEmbed()

  .setTitle("<:caa:925189522742992946> | PLAYA")
  .setDescription(`**${user}** \nHas pescado en **PLAYA** y has encontrado\n\n**GEMAS:**\n<:diamante:925189523397287967> **Diamante** (x${diamond})`)
  .setThumbnail("https://animesher.com/orig/1/166/1665/16658/animesher.com_gif-sea-pixels-1665834.gif")
  .setColor("#1d64a3")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

  diamante.sumar(`${user.id}`, diamond)
  }
}

  if(pesca === '2'){

  const canarosaT = await canarosa.obtener(`${user.id}`);

    if(canarosaT < 1) return message.reply({ content: "Necesitas <:cana_rosa:929936753941434419> **Caña Rosa** para pescar esta zona", allowedMentions: { repliedUser: false } })

  let diamondpink = Math.floor(Math.random() * 10) + 1
    
  const embed = new Discord.MessageEmbed()

  .setTitle("➜ | OCEANO <:cana_rosa:929936753941434419>")
  .setDescription(`**${user}** \n\nHas pescado en  **OCEANO** y has encontrado en lo profundo: \n<:diamanterosa:925189506628468837>  **Diamante Rosa** (x${diamondpink})`) .setThumbnail("https://i.pinimg.com/originals/f0/4c/6f/f04c6fc5382466aef8c790fa9c6f8d43.gif ")
  .setColor("#f196bd")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

    diamanterosa.sumar(`${user.id}`, diamondpink)
  }

  if(pesca === '3'){

    const canadoradoT = await canadorado.obtener(`${user.id}`)

    if(canadoradoT < 1) return message.reply({ content: "Necesitas <:cana_dorada:937708015774232626> **Caña Dorada** para pescar esta zona", allowedMentions: { repliedUser: false } })

  let gemaoroT = Math.floor(Math.random() * 5) + 1
    
  const embed = new Discord.MessageEmbed()

  .setTitle("➜ | ISLA DORADA <:cana_dorada:937708015774232626>")
  .setDescription(`**${user}** \n\nHas pescado en  **ISLA DORADA** y has encontrado en lo profundo: \n <:oro:937517645471825941> **Gema de Oro**  (x${gemaoroT}) \n\n<:cana_dorada:937708015774232626>`) .setThumbnail("https://media.discordapp.net/attachments/923453900571435053/937730582413197342/animesher.com_pixel-80s-gif-1594562.gif")
  .setColor("#ebe342")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

    gemaoro.sumar(`${user.id}`, gemaoroT)
  }

  if(pesca === '4'){

  const canaesmeraldaT = await canaesmeralda.obtener(`${user.id}`)

    if(canaesmeraldaT < 1) return message.reply({ content: "Necesitas <:cana_esmeralda:929936671867273217> **Caña Esmeralda** para pescar esta zona", allowedMentions: { repliedUser: false } })

  let emerald = Math.floor(Math.random() * 10) + 1
    
  const embed = new Discord.MessageEmbed()

  .setTitle("➜ | CASCADAS <:cana_esmeralda:929936671867273217>")
  .setDescription(`**${user}** \n\nHas pescado en  **CASCADAS** y has encontrado en lo profundo: \n<:esmeralda:925189523447611443> **Esmeralda** (x${emerald}) \n\n<:cana_esmeralda:929936671867273217>`)
  .setThumbnail("https://c.tenor.com/Y8gl1lVI5LQAAAAC/waterfall-nature.gif")
  .setColor("#078b30")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })
    
  esmeralda.sumar(`${user.id}`, emerald)
  }

  if(pesca === '5'){

  const canamikzuT = await canamikzu.obtener(`${user.id}`)

    if(canamikzuT < 1) return message.reply({ content: "Necesitas <:cana_mikzu:929932144502005790> **Caña Mikzu** para pescar esta zona", allowedMentions: { repliedUser: false } })

  let gemikzu = Math.floor(Math.random() * 10) + 1
    
  const embed = new Discord.MessageEmbed()

  .setTitle("➜ | LAGO MAGICO <:cana_mikzu:929932144502005790>")
  .setDescription(`**${user}** \n\nHas pescado en **LAGO MAGICO** y has encontrado en lo profundo: \n<:gema_mikzu:925189528598237254> **Gema Mikzu** (x${gemikzu}) \n\n<:cana_mikzu:929932144502005790>`)
  .setThumbnail("https://64.media.tumblr.com/8d12ffc4cf92cc55ce12e7cf0f2da7af/2b48356d662bc7c6-29/s500x750/f0197c0ab7a617e094018c7a1e87ce07af99cabf.gif")
  .setColor("#ba24f5")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })
    
  gemamikzu.sumar(`${user.id}`, gemikzu)
  }

  if(pesca === '6'){

    const canalixsaT = await canalixsa.obtener(`${user.id}`)

    if(canalixsaT < 1) return message.reply({ content: "Necesitas <:cana_lixsa:929933148538683412> **Caña Lixsa** para pescar esta zona", allowedMentions: { repliedUser: false } })

  let diamantelixsa = Math.floor(Math.random() * 10) + 1
    
  const embed = new Discord.MessageEmbed()

  .setTitle("➜ | RIO SAGRADO <:cana_lixsa:929933148538683412>")
  .setDescription(`**${user}** \n\nHas pescado en **RIO** y has encontrado en lo profundo: \n<:lixsa_diamond:925189859893715005> **Diamante Lixsa** (x${diamantelixsa}) \n\n<:cana_lixsa:929933148538683412>`)
  .setThumbnail("https://c.tenor.com/o_4vGWKAibEAAAAd/steven-universe.gif")
  .setColor("#2a99db")

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })

  diamondlixsa.sumar(`${user.id}`, diamantelixsa)
  }

  cooldown.add(message.author.id);

  setTimeout(() => {
    cooldown.delete(message.author.id);
  }, 60000);
  
 }

}