const Discord = require('discord.js');

module.exports = {
    name: "hack",
    aliases: ["hax"],
async execute(client, message, args)
    {
        const hack = args.join(" ") 
      if(!hack) return message.channel.send("ok, estás pirateado Elige a otra persona")
      
              function wait(ms){
              let start = new Date().getTime();
              let end = start;
              while(end < start + ms) {
                end = new Date().getTime();
             }
           }
  const user = args.join(" ")
  if(!user)
  {
    return message.reply("¿A quién hackeo? Por favor mencionalo");
  }
  const prompt = await message.channel.send(`Hackeando ${user} ahora...`);
      
     await wait(2700);
       await  prompt.edit('Iniciando sesion en discord...');
       await wait(2700);
       await  prompt.edit(`Found:\n**Email**: \`${user}***@gmail.com\`\n**Password**: \`*******\``);
       await  wait(3700);
       await  prompt.edit('Obteniendo dms');
       await  wait(3700);
       await prompt.edit('Listado de contraseñas más comunes...');
       await  wait(2700);
       await  prompt.edit(`Inyectando VIRUS.EXE a ${user}`);
      await  wait(3700);
       await  prompt.edit('VIRUS INYECTADO');
       await  wait(3700);
      
     await prompt.edit('Localizando dirección IP');
      await wait(5000);
     await  prompt.edit('Spamming email...');
     await wait(6700);
     await  prompt.edit('Vendiendo datos a facebook...');
    await   wait(3700);
    let embed = new Discord.MessageEmbed()
    .setDescription(`HACK completo hacia ${user}`)
    .setImage("https://media1.tenor.com/images/5ba5501d9ee356cc0c478daa57306c19/tenor.gif?itemid=20964053")
    .setFooter('Esto es una Broma, no es hack real XD');
    await prompt.delete
     await  message.channel.send({ embeds: [embed] });
      
  
    }
  }