const Discord = require('discord.js');
const db = require('megadb');
const diamante = new db.crearDB('diamante');
const diamanterosa = new db.crearDB('diamanterosa');
const gemaoro = new db.crearDB('gemaoro');
const esmeralda = new db.crearDB('esmeralda');
const gemamikzu = new db.crearDB('gemamikzu');
const diamondlixsa = new db.crearDB('diamondlixsa');

const picodiamante = new db.crearDB('picodiamante');
const picorosa = new db.crearDB('picorosa');
const picodorado = new db.crearDB('picodorado');
const picoesmeralda = new db.crearDB('picoesmeralda');
const picomikzu = new db.crearDB('picomikzu');
const picolixsa = new db.crearDB('picolixsa');

const canadiamante = new db.crearDB('canadiamante');
const canarosa = new db.crearDB('canarosa');
const canadorado = new db.crearDB('canadorado');
const canaesmeralda = new db.crearDB('canaesmeralda');
const canamikzu = new db.crearDB('canamikzu');
const canalixsa = new db.crearDB('canalixsa');

const pezceleste = new db.crearDB('pezceleste');
const pezrosa = new db.crearDB('pezrosa');
const pezdorado = new db.crearDB('pezdorado');
const pezverde = new db.crearDB('pezverde');
const pezpurpura = new db.crearDB('pezpurpura');
const pezazul = new db.crearDB('pezazul');

const pistola = new db.crearDB('pistola');
const fusil = new db.crearDB('fusil');
const metralleta = new db.crearDB('metralleta');
const granada = new db.crearDB('granada');
const granadahumo = new db.crearDB('granadahumo');
const misil = new db.crearDB('misil');
const canon = new db.crearDB('canon');

const cajita = new db.crearDB('cajita');
const cajitaclasica = new db.crearDB('cajitaclasica');
const cajasecreta = new db.crearDB('cajasecreta');
const cofremagico = new db.crearDB('cofremagico');
const cajitamagica = new db.crearDB('cajitamagica');
const cajitasupreme = new db.crearDB('cajitasupreme');
const cajamilitar = new db.crearDB('cajamilitar');
const cajitamikzu = new db.crearDB('cajitamikzu');
const cajitalixsa = new db.crearDB('cajitalixsa');

const pocionamor = new db.crearDB('pocionamor');
const pocionmagica = new db.crearDB('pocionmagica');
const bolsamagica = new db.crearDB('bolsamagica');
const pocionrosa = new db.crearDB('pocionrosa');
const cartas = new db.crearDB('cartas');
const llave = new db.crearDB('llave');
const alcohol = new db.crearDB('alcohol');
const encendedor = new db.crearDB('encendedor');
const madera = new db.crearDB('madera');
const papel = new db.crearDB('papel');

const acero = new db.crearDB('acero');
const cajacarton = new db.crearDB('cajacarton');
const palomadera = new db.crearDB('palomadera');
const tornillo = new db.crearDB('tornillo');
const carbon = new db.crearDB('carbon');
const piedra = new db.crearDB('piedra');
const roca = new db.crearDB('roca');
const aluminio = new db.crearDB('aluminio');
const lazo = new db.crearDB('lazo');

const cofre = new db.crearDB('cofre');

module.exports = {
	name: 'cofre',
	alias: ['inv'],

	async execute (client, message, args) {

const user = message.mentions.users.first() || message.author;
	
if(!diamante.tiene(`${user.id}`))
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
if(!alcohol.tiene(`${user.id}`))
  alcohol.establecer(`${user.id}`, 0)
if(!encendedor.tiene(`${user.id}`))
  encendedor.establecer(`${user.id}`, 0)
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
if(!palomadera.tiene(`${user.id}`))
  palomadera.establecer(`${user.id}`, 0)



if(!pistola.tiene(`${user.id}`))
  pistola.establecer(`${user.id}`, 0)
if(!fusil.tiene(`${user.id}`))
  fusil.establecer(`${user.id}`, 0)
if(!metralleta.tiene(`${user.id}`))
  metralleta.establecer(`${user.id}`, 0)
if(!granada.tiene(`${user.id}`))
  granada.establecer(`${user.id}`, 0)
if(!granadahumo.tiene(`${user.id}`))
  granadahumo.establecer(`${user.id}`, 0)
if(!misil.tiene(`${user.id}`))
  misil.establecer(`${user.id}`, 0)
if(!canon.tiene(`${user.id}`))
  canon.establecer(`${user.id}`, 0)

if(!pezceleste.tiene(`${user.id}`))
  pezceleste.establecer(`${user.id}`, 0)
if(!pezrosa.tiene(`${user.id}`))
  pezrosa.establecer(`${user.id}`, 0)
if(!pezdorado.tiene(`${user.id}`))
  pezdorado.establecer(`${user.id}`, 0)
if(!pezverde.tiene(`${user.id}`))
  pezverde.establecer(`${user.id}`, 0)
if(!pezpurpura.tiene(`${user.id}`))
  pezpurpura.establecer(`${user.id}`, 0)
if(!pezazul.tiene(`${user.id}`))
  pezazul.establecer(`${user.id}`, 0)


if(!cofre.tiene(`${user.id}`)){
 cofre.establecer(`${user.id}`, 0)
}

const cofreT = await cofre.obtener(`${user.id}`);
	
const diamanteT = await diamante.obtener(`${user.id}`);
const diamanteRosaT = await diamanterosa.obtener(`${user.id}`);
const gemaoroT = await gemaoro.obtener(`${user.id}`);
const esmeraldaT = await esmeralda.obtener(`${user.id}`);
const gemamikzuT = await gemamikzu.obtener(`${user.id}`);
const diamondlixsaT = await diamondlixsa.obtener(`${user.id}`);

const pocionamorT = await pocionamor.obtener(`${user.id}`)
const pocionmagicaT = await pocionmagica.obtener(`${user.id}`)
const bolsamagicaT = await bolsamagica.obtener(`${user.id}`)
const pocionrosaT = await pocionrosa.obtener(`${user.id}`)
const cartasT = await cartas.obtener(`${user.id}`)
const llaveT = await llave.obtener(`${user.id}`)
const alcoholT = await alcohol.obtener(`${user.id}`)
const encendedorT = await encendedor.obtener(`${user.id}`)
const maderaT = await madera.obtener(`${user.id}`)
const papelT = await papel.obtener(`${user.id}`)

const picodiamanteT = await picodiamante.obtener(`${user.id}`)
const picorosaT = await picorosa.obtener(`${user.id}`)
const picodoradoT = await picodorado.obtener(`${user.id}`)
const picoesmeraldaT = await picoesmeralda.obtener(`${user.id}`)
const picomikzuT = await picomikzu.obtener(`${user.id}`)
const picolixsaT = await picolixsa.obtener(`${user.id}`)

const canadiamanteT = await canadiamante.obtener(`${user.id}`)
const canarosaT = await canarosa.obtener(`${user.id}`)
const canadoradoT = await canadorado.obtener(`${user.id}`)
const canaesmeraldaT = await canaesmeralda.obtener(`${user.id}`)
const canamikzuT = await canamikzu.obtener(`${user.id}`)
const canalixsaT = await canalixsa.obtener(`${user.id}`)

const cajitaT = await cajita.obtener(`${user.id}`)
const cajitaclasicaT = await cajitaclasica.obtener(`${user.id}`)
const cajasecretaT = await cajasecreta.obtener(`${user.id}`)
const cofremagicoT = await cofremagico.obtener(`${user.id}`)
const cajitamagicaT = await cajitamagica.obtener(`${user.id}`)
const cajitasupremeT = await cajitasupreme.obtener(`${user.id}`)
const cajamilitarT = await cajamilitar.obtener(`${user.id}`)
const cajitamikzuT = await cajitamikzu.obtener(`${user.id}`)
const cajitalixsaT = await cajitalixsa.obtener(`${user.id}`)

const aceroT = await acero.obtener(`${user.id}`)
const cajacartonT = await cajacarton .obtener(`${user.id}`)
const palomaderaT = await palomadera.obtener(`${user.id}`)
const tornilloT = await tornillo.obtener(`${user.id}`)
const carbonT = await carbon.obtener(`${user.id}`)
const piedraT = await piedra.obtener(`${user.id}`)
const rocaT = await roca.obtener(`${user.id}`)
const aluminioT = await aluminio.obtener(`${user.id}`)
const lazoT = await lazo.obtener(`${user.id}`)

const pistolaT = await pistola.obtener(`${user.id}`)
const fusilT = await fusil.obtener(`${user.id}`)
const metralletaT = await metralleta.obtener(`${user.id}`)
const granadaT = await granada.obtener(`${user.id}`)
const granadahumoT = await granadahumo.obtener(`${user.id}`)
const misilT = await misil.obtener(`${user.id}`)
const canonT = await canon.obtener(`${user.id}`)



const total = parseInt(diamanteT) + parseInt(cofreT);

const embed = new Discord.MessageEmbed()
.setAuthor(user.tag, user.displayAvatarURL())
.setTitle("<:cofre:925189506498461776> | COFRE ")
.addField("<a:flecha_lixsa:910560844893544498> | GEMAS:", `<:diamante:925189523397287967> <:diamanterosa:925189506628468837> <:esmeralda:925189523447611443> <:gema_mikzu:925189528598237254> <:lixsa_diamond:925189859893715005>`)
.addField("<a:flecha_lixsa:910560844893544498> | ITEMS:", `<:pociondeamor:925189526673043497> <:pocionmagica:925189530422743060> <:polvomagico:925189527725830186> <:pocion:925189517701447680>  <:cartasmagicas:925189505126903818> <:llave:925189529302859818> 
`)
.addField("<a:flecha_lixsa:910560844893544498> | ARMAS", `<:pistola:925289400877867038> <:fusil:925289406863118376> <:ametralladora:925289407697780766> <:granada:925289410776428604> <:grandadehumo:925289410533134356> <:misil:925289406439497758> <:canon:926232581324812349>`)
.addField("<a:flecha_lixsa:910560844893544498> | PICAS", "<:pico:925189526798876743> <:pico_rosa:929936851425448006> <:pico_esmeralda:929936795515355226> <:pico_mikzu:929932128668499988> <:pico_lixsa:929933120193568788>")
.addField("<a:flecha_lixsa:910560844893544498> | CAÑAS", "<:caa:925189522742992946> <:cana_rosa:929936753941434419> <:cana_esmeralda:929936671867273217> <:cana_mikzu:929932144502005790> <:cana_lixsa:929933148538683412>")
.addField("<a:flecha_lixsa:910560844893544498> | CAJITAS", "<:box:925189489557651507> <:boxclassic:925189484746801192> <:magicbox:925189513666506782> <:specialbox:925189521925099562> <:cofremagico:925189505428910141> <:caja_militar:929921335038201936> <:cajita_lixsa:929916491921506334> <:cajita_mikzu:925189503587606528>")
.setThumbnail("https://media.discordapp.net/attachments/923453900571435053/925196124841713664/cofre.png?width=422&height=422")
.setColor('#fd1144')

const embedgemas = new Discord.MessageEmbed()
.setAuthor(user.tag, user.displayAvatarURL())
.addField("<a:flecha_lixsa:910560844893544498> | GEMAS:", `<:diamante:925189523397287967> **Diamante** (x${cofreT})\n<:diamanterosa:925189506628468837> **Diamante Rosa** (x${diamanteRosaT}) \n<:oro:937517645471825941> **Gema de Oro** (x${gemaoroT}) \n<:esmeralda:925189523447611443> **Esmeralda** (x${esmeraldaT}) \n<:gemamagica:925189528598237254> **Gema Mikzu** (x${gemamikzuT}) \n<:special_diamond:925189859893715005> **Diamante Lixsa** (x${diamondlixsaT})`)
.setThumbnail("https://media.discordapp.net/attachments/923453900571435053/925196124841713664/cofre.png?width=422&height=422")
.setColor("#fd1144")

const embeditems = new Discord.MessageEmbed()
.setAuthor(user.tag, user.displayAvatarURL())
.addField("<a:flecha_lixsa:910560844893544498> | ITEMS:", `<:pociondeamor:925189526673043497> **Poción de Amor** (x${pocionamorT}) \n<:pocionmagica:925189530422743060> **Poción Mágica** (x${pocionmagicaT}) \n<:polvomagico:925189527725830186> **Bolsa Mágica** (x${bolsamagicaT}) \n<:pocion:925189517701447680> **Pócima Rosa** (x${pocionrosaT}) \n<:cartasmagicas:925189505126903818> **Cartas Mágicas** (x${cartasT}) \n<:llave:925189529302859818> **Llave** (x${llaveT})\n<:alchool:937106975735570473> **Alcohol** (x${alcoholT})\n<:encendedor:937111141673480212> **Encendedor** (x${encendedorT}) \n<:tabla_madera:937107087765418024> **Madera** (x${maderaT}) \n<:papel:937517245049999453> **Papel** (x${papelT})`)
.setThumbnail("https://media.discordapp.net/attachments/923453900571435053/925196124841713664/cofre.png?width=422&height=422")
.setColor("#fd1144")

const embedarmas = new Discord.MessageEmbed()
.addField("<a:flecha_lixsa:910560844893544498> | ARMAS", `<:pistola:925289400877867038> **Pistola** (x${pistolaT}) \n<:fusil:925289406863118376> **Fusil** (x${fusilT}) \n<:ametralladora:925289407697780766> **Metralleta** (x${metralletaT}) \n<:granada:925289410776428604> **Granada** (x${granadaT}) \n<:grandadehumo:925289410533134356> **Granada de Humo** (x${granadahumoT}) \n<:misil:925289406439497758> **Misil** (x${misilT}) \n<:canon:926232581324812349> **Cañon Orbital** (x${canonT})`)
.setThumbnail("https://media.discordapp.net/attachments/923453900571435053/925196124841713664/cofre.png?width=422&height=422")
.setColor("#fd1144")


const embedpicas = new Discord.MessageEmbed()
.addField("<a:flecha_lixsa:910560844893544498> | PICAS", `<:pico:925189526798876743> **Pico Diamante** (x${picodiamanteT}) \n<:pico_rosa:929936851425448006>  **Pico Rosa** (x${picorosaT}) \n<:pico_dorado:937708034883465226> **Pico Dorado** (x${picodoradoT}) \n<:pico_esmeralda:929936795515355226>  **Pico Esmeralda** (x${picoesmeraldaT}) \n<:pico_mikzu:929932128668499988> **Pico Mikzu** (x${picomikzuT})\n<:pico_lixsa:929933120193568788> **Pico Lixsa** (x${picolixsaT})`)
.setThumbnail("https://media.discordapp.net/attachments/923453900571435053/925196124841713664/cofre.png?width=422&height=422")
.setColor("#fd1144")

const embedcañas = new Discord.MessageEmbed()
.addField("<a:flecha_lixsa:910560844893544498> | CAÑAS", `<:caa:925189522742992946>  **Caña Diamante** (x${canadiamanteT}) \n<:cana_rosa:929936753941434419>   **Caña Rosa** (x${canarosaT}) \n<:cana_dorada:937708015774232626>  **Caña Dorada** (x${canadoradoT}) \n<:cana_esmeralda:929936671867273217>   **Caña Esmeralda** (x${canaesmeraldaT}) \n<:cana_mikzu:929932144502005790> **Caña Mikzu** (x${canamikzuT}) \n<:cana_lixsa:929933148538683412> **Caña Lixsa** (x${canalixsaT})`)
.setThumbnail("https://media.discordapp.net/attachments/923453900571435053/925196124841713664/cofre.png?width=422&height=422")
.setColor("#fd1144")

const embedcajas = new Discord.MessageEmbed()
.addField("<a:flecha_lixsa:910560844893544498> | CAJITAS", `<:box:925189489557651507> **Cajita** (x${cajitaT})\n<:boxclassic:925189484746801192> **Cajita Clásica** (x${cajitaclasicaT}) \n<:box_secret:937114886784315482> **Caja Secreta** (x${cajasecretaT})\n<:magicbox:925189513666506782> **Cajita Supreme** (x${cajitasupremeT})\n<:specialbox:925189521925099562> **Cajita Mágica** (x${cajitamagicaT}) \n<:cofremagico:925189505428910141> **Cofre Mágico** (x${cofremagicoT})\n<:caja_militar:929921335038201936> **Caja Militar** (x${cajamilitarT})\n<:cajita_lixsa:929916491921506334> **Cajita Lixsa** (x${cajitalixsaT})\n<:cajita_mikzu:925189503587606528> **Cajita Mikzu** (x${cajitamikzuT})`)
.setThumbnail("https://media.discordapp.net/attachments/923453900571435053/925196124841713664/cofre.png?width=422&height=422")
.setColor("#fd1144")

const embedmateriales = new Discord.MessageEmbed()
.addField("<a:flecha_lixsa:910560844893544498> |MATERIALES", `<:acero:937106942713802762> **Acero** (x${aceroT})\n<:caja:937221185673003010> **Caja de Cartón** (x${cajacartonT})\n<:aluminio:937218534973517854> **Aluminio** (x${aluminioT})\n<:carbon:937106991178989608> **Carbón** (x${carbonT})\n<:palo_madera:937107073181823016> **Palo de Madera** (x${palomaderaT})\n<:piedra:937218501024841838> **Piedra** (x${piedraT})\n<:roca:937228470109499413> **Roca** (x${rocaT})\n<:tornillo:937112172327235635> **Tornillo** (x${tornilloT}) \n<:lazodecinta:937743481751867432> **Lazo** (x${lazoT})`)
.setThumbnail("https://media.discordapp.net/attachments/923453900571435053/925196124841713664/cofre.png?width=422&height=422")
.setColor("#fd1144")

const embedpeces = new Discord.MessageEmbed()
.addField("<a:flecha_lixsa:910560844893544498> | PECES", "<:pez_celeste:937107149056794704>  **Pez Celeste** (x0)\n<:pez_rosa:937107186063138846>  **Pez Rosa** (x0)\n<:pez_dorado:937107172469395456>  **Pez Dorado** (x0)\n<:pez_verde:937107203125571654>  **Pez Verde** (x0)\n<:pez_purpura:937107137857994823>  **Pez Purpura** (x0)\n<:pez_azul:937107217935634492>  **Pez Azul** (x0)")
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
    emoji: "<:cofre:925189506498461776>"
	},
	{
		label: "ITEMS",
    description: "Inventario de Items",
		value: "2",
    emoji: "<:cofre:925189506498461776>"
	},
  {
		label: "ARMAS",
    description: "Inventario de Armas",
		value: "3",
    emoji: "<:cofre:925189506498461776>"
	},
  {
		label: "PICAS",
    description: "Inventario de Picas",
		value: "4",
    emoji: "<:cofre:925189506498461776>"
	},
  {
		label: "CAÑAS",
    description: "Inventario de Cañas",
		value: "5",
    emoji: "<:cofre:925189506498461776>"
	},
  {
		label: "CAJITAS",
    description: "Inventario de Cajitas",
		value: "6",
    emoji: "<:cofre:925189506498461776>"
	},
  {
		label: "MATERIALES",
    description: "Inventario de Materiales",
		value: "7",
    emoji: "<:cofre:925189506498461776>"
	},
  {
		label: "PECES",
    description: "Inventario de Peces",
		value: "8",
    emoji: "<:cofre:925189506498461776>"
	}
])
)

const msg = await message.reply({
  embeds: [embed],
	components: [menu],
  allowedMentions: { repliedUser: false }
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
if(i.values[0] === '4'){
await i.deferUpdate()
 i.editReply({ embeds: [embedpicas], components: [menu] })
}
if(i.values[0] === '5'){
await i.deferUpdate()
 i.editReply({ embeds: [embedcañas], components: [menu] })
}
if(i.values[0] === '6'){
await i.deferUpdate()
 i.editReply({ embeds: [embedcajas], components: [menu] })
}
if(i.values[0] === '7'){
await i.deferUpdate()
 i.editReply({ embeds: [embedmateriales], components: [menu] })
}
if(i.values[0] === '8'){
await i.deferUpdate()
 i.editReply({ embeds: [embedpeces], components: [menu] })
}
})

  }
}