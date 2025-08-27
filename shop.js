const Discord = require('discord.js');



module.exports = async (client, message, args) => {

  name: ('shopxdxdxd')


  const embed = new Discord.MessageEmbed()

  .setTitle("Tienda de Lixsa")
  .setDescription('Bienvenidos a mi Tienda \nPuedes comprar escribiendo `ls!buy <item name>`')
  .addField('🍪 | Galleta', 'Compra una galleta')
  
  .setColor("GREEN")

  message.channel.send(embed)

 }