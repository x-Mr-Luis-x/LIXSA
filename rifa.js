const Discord = require("discord.js");
module.exports =
{
    name: "rifasan",
    aliases: [],
    execute(client, message, args){

const embed = new Discord.MessageEmbed()

	.setColor('#f93de4')
	.setTitle('<:gift_especial:924414158315851776> ¡ RIFA ! <:gift_especial:924414158315851776>')
  .setDescription('💖 **Rifa Especial San Valentin** 💖\n\n<:gift_especial:924414158315851776>  | **Σ·₊・PREMIOS・₊· ͟͟͞꒰**\n | <:Cajita_Blossom:924414346765938729> **Cajita Blossom** (x1)\n<a:flecha_mikzu:910898640464265296>| <:muramasa:928421227746426941> **Pica Muramasa** (x1)\n<a:flecha_mikzu:910898640464265296>| <:ligthning:928421202580615238> **Caña Lightning** (x1)\n<a:flecha_mikzu:910898640464265296>| <:haste_pet:928421456843530240> **Haste Pet Scroll** (x1)\n<a:flecha_mikzu:910898640464265296>| <:EXPANCIN_DE_BANCO:909923785778552942> **Expansión de Banco** (x3)\n\n❔| **Σ·₊・COMO PARTICIPO?੭・₊· ͟͟͞꒰**\n<:ticket:938980749980352603> | **Tickets**\n\n&share <@753630059335647244> - <:coin_neko:909928597022732318> **3174** x **1** <:ticket:938980749980352603> \n\n&gift <@753630059335647244> - <:emperium:906413404946829402> **emp** x **3** <:ticket:938980749980352603>\n\n<:server:938983195079221318> **invite to server**  x **1** <:ticket:938980749980352603>\n\nMientras mas <:ticket:938980749980352603> tickets Tengas mas oportunidades tienes de Ganar')
	.setThumbnail('https://media.discordapp.net/attachments/923453900571435053/928424679406981210/caja-para-regalo.png?width=422&height=422')
  .setFooter('RIFA HASTA EL 28 de FEBRERO', 'https://image.freepik.com/vector-gratis/icono-calendario-sobre-blanco_24911-23381.jpg')

client.channels.cache.get('895132990353584138').send(
  {
  content: '<@&892965208358780949>',
  embeds: [embed]
    }
   )
  }
};