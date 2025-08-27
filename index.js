const express = require('express');
const fs = require('fs');
const db = require('megadb');
const prefix_db = new db.crearDB('prefix');
const afk = new db.crearDB('afk');
const app = express();
const port = 3000;

app.get("/", function(request, response) { response.send('<h1>Online</h1>');
});
app.listen(port, () => console.log(`Code online 👍`));

const Discord = require('discord.js');

const { Collection } = require('discord.js');

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES","GUILD_MEMBERS", "GUILD_MESSAGE_REACTIONS"] });

////////////////////////////////////////////////////

const config = require('./config.json')

const { globalprefix } = require('./config.json')

client.commands = new Collection();
const commandFiles = fs
  .readdirSync('./comandos')
  .filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./comandos/${file}`);
  client.commands.set(command.name, command);
}

const economiaCF = fs
  .readdirSync('./comandos/economia')
  .filter(file => file.endsWith('.js'));

for (const file of economiaCF) {
  const command = require(`./comandos/economia/${file}`);
  client.commands.set(command.name, command);
}

const rolesSV = fs
  .readdirSync('./comandos/roles')
  .filter(file => file.endsWith('.js'));

for (const file of rolesSV) {
  const command = require(`./comandos/roles/${file}`);
  client.commands.set(command.name, command);
}

const normalesNF = fs
  .readdirSync('./comandos/normales')
  .filter(file => file.endsWith('.js'));

for (const file of normalesNF) {
  const command = require(`./comandos/normales/${file}`);
  client.commands.set(command.name, command);
}

const interactionNT = fs
  .readdirSync('./comandos/interaction')
  .filter(file => file.endsWith('.js'));

for (const file of interactionNT) {
  const command = require(`./comandos/interaction/${file}`);
  client.commands.set(command.name, command);
}

const imagesJP = fs
  .readdirSync('./comandos/images')
  .filter(file => file.endsWith('.js'));

for (const file of imagesJP) {
  const command = require(`./comandos/images/${file}`);
  client.commands.set(command.name, command);
}

const giveawayGW = fs
  .readdirSync('./comandos/giveaway')
  .filter(file => file.endsWith('.js'));

for (const file of giveawayGW) {
  const command = require(`./comandos/giveaway/${file}`);
  client.commands.set(command.name, command);
}

const moderationMD = fs
  .readdirSync('./comandos/moderation')
  .filter(file => file.endsWith('.js'));

for (const file of moderationMD) {
  const command = require(`./comandos/moderation/${file}`);
  client.commands.set(command.name, command);
}


const { readdirSync } = require('fs')

for (const file of readdirSync('./eventos')) {
  if (file.endsWith('.js')) {
    let fileName = file.substring(0, file.length - 3)

    let fileContents = require(`./eventos/${file}`)

    client.on(fileName, fileContents.bind(null, client))
  }
}


////////////////////////////////

client.on("ready", async () => {
  console.log(client.user.tag)
})

client.on('guildMemberAdd', (member) => {

  const channel = member.guild.channels.cache.find(
    (channel) => channel.id === "772982484022853632"
  );

  const embed = new Discord.MessageEmbed()
    .setColor("#ff2a76")
    .setAuthor(
      member.user.tag /*Autor*/,
      member.user.displayAvatarURL() /* Icono*/
    )
    .setDescription(`₊꒷꒦︶︶₊꒷︶₊꒷︶❖•° × ◆ × °•❖︶꒷︶꒷︶︶꒷꒦\n✩｡:•. **B✧I✧E✧N✧V✧E✧N✧I✧D✧@** .•:｡✩\n• ₊°✧ ${member}• ₊°✧\n\n✦➜**Recuerda leer nuestras Normas**\n»»—— <#844692683615764490>\n\n✦➜**Esperamos que la pases bien y te diviertas** (^‿^)\n\n｡☆✼★━━━━━━━━━━━━━━━★✼☆｡\n\n✩｡:•.｡:•.** W✧E✧L✧C✧O✧M✧E** .•:｡.•:｡✩\n• ₊°✧ ${member}• ₊°✧\n\n✦➜**Remember to read our Rules**\n»»——  <#795111875590881300>\n\n✦➜**We hope you have a good time and have fun** (^‿^)\n₊꒷꒦︶︶₊꒷︶₊꒷︶❖•° × ◆ × °•❖︶꒷︶꒷︶︶꒷꒦`) .setImage("https://media.discordapp.net/attachments/844680428007063662/977449573750566962/SX_CITY__.png")
  .setFooter(`⟣ Σ₊·・꒰❤꒱|Ş¥₦ŦλX~CłŦ¥| ͟͟͞₊· ͟͟͞꒰ ⟢`, 'https://images-ext-2.discordapp.net/external/pLtwiHdSGXBZFE057aLNsd0vS_GdujwFe62ImnZqrUA/%3Fsize%3D2048/https/cdn.discordapp.com/icons/754360617749577790/e61518278de5ebd5f595148551a346cb.png?width=422&height=422')

  channel.send(
    {
      content: `${member}`,
      embeds: [embed]
    }
  )
});

client.on('guildMemberAdd', (member) => {

  const channel = member.guild.channels.cache.find(
    (channel) => channel.id === "794713297621876777"
  );

  const embed = new Discord.MessageEmbed()
    .setColor("#ff2a76")
    .setAuthor(
      member.user.tag /*Autor*/,
      member.user.displayAvatarURL() /* Icono*/
    )
    .setDescription(`°.✩┈┈┈∘┈┈ᗢ┈┈୨✦୧┈┈ᗢ┈┈∘┈┈┈✩.°\n ${member} **•B✧I✧E✧N✧V✧E✧N✧I✧D✧@•** a\n **⟣ Σ₊·・꒰❤꒱|Ş¥₦ŦλX~CłŦ¥| ͟͟͞₊· ͟͟͞꒰ ⟢**\n°.✩┈┈┈∘┈┈ᗢ┈┈୨✦୧┈┈ᗢ┈┈∘┈┈┈✩.° \nPudes usar **ls!roles** para obtener tus **Roles **\n\n｡☆✼★━━━━━━━━━━━★✼☆｡\n\n${member} **✩｡•. W✧E✧L✧C✧O✧M✧E .•｡✩** to\n**⟣ Σ₊·・꒰❤꒱|Ş¥₦ŦλX~CłŦ¥| ͟͟͞₊· ͟͟͞꒰ ⟢** \n°.✩┈┈┈∘┈┈ᗢ┈┈୨✦୧┈┈ᗢ┈┈∘┈┈┈✩.°\nYou can to use **ls!roles** to get your **Roles**\n`)
    .setThumbnail(member.user.displayAvatarURL())


  channel.send(
    {
      embeds: [embed]
    }
  )
});

client.on('messageCreate', async (message) => {

  let prefix = globalprefix;

  if (message.channel.type === "dm") return;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase()

  let cmd = client.commands.find(
    c => c.name === command || (c.alias && c.alias.includes(command))
  );

  if (cmd) {
    cmd.execute(client, message, args); 
    
  }
  if (!cmd) {
    if (message.content === prefix) return;
    const embed = new Discord.MessageEmbed()
      .setTitle("<:xx:925189718302408764> | Comando no encontrado")
      .setDescription(`EL COMANDO "${command}" NO EXISTE`)
      .setThumbnail('https://media.discordapp.net/attachments/923453900571435053/925188787154325534/xx.png?width=422&height=422')
      .setColor("#1de6ff")

    message.channel.send({ embeds: [embed] })

    }
  })

  client.on('messageCreate', async (message) => {
  let prefix = globalprefix;
  if (message.author.bot) return;
  if (message.content.startsWith(`${prefix}afk`)) return;
  const mentioned = message.mentions.members.first();
  if (mentioned) {
    if (afk.tiene(`${message.guild.id}-${mentioned.id}`, '-')){
      message.reply({ content: `<:xx:925189718302408764> | Este Usuario se encuentra afk, no molestes`, allowedMentions: { repliedUser: false } })
      

    }
  }
  if (afk.tiene(`${message.guild.id}-${message.author.id}`, '-')) {
    message.reply({ content: `<:vf:925189693300154399> | **${message.author.username}** Tu estado afk ha sido removido`, allowedMentions: { repliedUser: false } })
    afk.eliminar(message.guild.id);
  
}
});

////////////////ROLES NOTIFICATIONS/////////////
client.on('interactionCreate', async interaction => {
  const member = await interaction.message.guild.members.fetch({
    user: interaction.user.id,
    force: true
  })
  if (!interaction.isSelectMenu()) return;
  //ANUNCIO ROLE
  if (interaction.values == 'anuncio') {
    await interaction.deferUpdate();
    if (!member.roles.cache.has("884574014863998996")) {
      await member.roles.add('884574014863998996')
      const embed = new Discord.MessageEmbed()
        .setDescription(`${member} \nannouncement added : <@&884574014863998996>!`)
        .setColor("#ffffff")
      return interaction.message.channel.send({ embeds: [embed] })
    } else if (member.roles.cache.has("884574014863998996")) {
      await member.roles.remove('884574014863998996')
      const embed = new Discord.MessageEmbed()
        .setDescription(`${member} \nannouncement removed : <@&884574014863998996> :(`)
        .setColor("#ffffff")
        return interaction.message.channel.send({ embeds: [embed] })
    }
  }
  //NEKOTINA ROLE
  if (interaction.values == 'nekotina') {
    await interaction.deferUpdate();
    if (!member.roles.cache.has("842666836587708417")) {
      await member.roles.add('842666836587708417')
      const embed = new Discord.MessageEmbed()
        .setDescription(`${member} \nanuncio añadido : <@&842666836587708417>!`)
        .setColor("#f374f8")
      return interaction.message.channel.send({ embeds: [embed] })
    } else if (member.roles.cache.has("842666836587708417")) {
      await member.roles.remove('842666836587708417')
            const embed = new Discord.MessageEmbed()
        .setDescription(`${member} \nanuncio removido : <@&842666836587708417> :(`)
        .setColor("#f374f8")
      return interaction.message.channel.send({ embeds: [embed] })
    }
  }
//POLLUX ROLE
  if (interaction.values == 'pollux') {
    await interaction.deferUpdate();
    if (!member.roles.cache.has("842666052588273666")) {
      await member.roles.add('842666052588273666')
      const embed = new Discord.MessageEmbed()
        .setDescription(`${member} \nanuncio añadido : <@&842666052588273666>!`)
        .setColor("#ff82b2")
      return interaction.message.channel.send({ embeds: [embed] })
    } else if (member.roles.cache.has("842666052588273666")) {
      await member.roles.remove('842666052588273666')
            const embed = new Discord.MessageEmbed()
        .setDescription(`${member} \nanuncio removido : <@&842666052588273666> :(`)
        .setColor("#ff82b2")
      return interaction.message.channel.send({ embeds: [embed] })
    }
  }
//EVENTO ROLE
  if (interaction.values == 'evento') {
    await interaction.deferUpdate();
    if (!member.roles.cache.has("866206907810709544")) {
      await member.roles.add('866206907810709544')
      const embed = new Discord.MessageEmbed()
        .setDescription(`${member} \nannouncement added : <@&866206907810709544>!`)
        .setColor("#e2d25f")
      return interaction.message.channel.send({ embeds: [embed] })
    } else if (member.roles.cache.has("866206907810709544")) {
      await member.roles.remove('866206907810709544')
            const embed = new Discord.MessageEmbed()
        .setDescription(`${member} \nannouncement removed : <@&866206907810709544> :(`)
        .setColor("#e2d25f")
      return interaction.message.channel.send({ embeds: [embed] })
    }
  }
})


////////////////NEKO ROLES/////////////
client.on('interactionCreate', async interaction => {
  const member = await interaction.message.guild.members.fetch({
    user: interaction.user.id,
    force: true
  })
  if (!interaction.isSelectMenu()) return;
  //SORTEO ROLE
  if (interaction.values == 'sorteo') {
    await interaction.deferUpdate();
    if (!member.roles.cache.has("893969115994267658")) {
      await member.roles.add('893969115994267658')
      const embed = new Discord.MessageEmbed()
        .setDescription(`${member} \nEvento añadido : <@&893969115994267658>!`)
        .setColor("#e681d5")
      return interaction.message.channel.send({ embeds: [embed] })
    } else if (member.roles.cache.has("893969115994267658")) {
      await member.roles.remove('893969115994267658')
      const embed = new Discord.MessageEmbed()
        .setDescription(`${member} \nEvento removido : <@&893969115994267658> :(`)
        .setColor("#e681d5")
        return interaction.message.channel.send({ embeds: [embed] })
    }
  }
  //RIFA ROLE
  if (interaction.values == 'rifa') {
    await interaction.deferUpdate();
    if (!member.roles.cache.has("892965208358780949")) {
      await member.roles.add('892965208358780949')
      const embed = new Discord.MessageEmbed()
        .setDescription(`${member} \nEvento añadido : <@&892965208358780949>!`)
        .setColor("#ed84dc")
      return interaction.message.channel.send({ embeds: [embed] })
    } else if (member.roles.cache.has("892965208358780949")) {
      await member.roles.remove('892965208358780949')
            const embed = new Discord.MessageEmbed()
        .setDescription(`${member} \nEvento removido : <@&892965208358780949> :(`)
        .setColor("#ed84dc")
      return interaction.message.channel.send({ embeds: [embed] })
    }
  }
})

////////////////ROLES COLORES/////////////
client.on('interactionCreate', async interaction => {
  const member = await interaction.message.guild.members.fetch({
    user: interaction.user.id,
    force: true
  })
  if (!interaction.isSelectMenu()) return;
  //ROJO ROLE
  if (interaction.values == 'rojo') {
    await interaction.deferUpdate();
    if (!member.roles.cache.has("773006660507664406")) {
      await member.roles.add('773006660507664406')
      const embed = new Discord.MessageEmbed()
        .setDescription(`${member} the color was added to you <@&773006660507664406>!`)
        .setColor("#f00202")
      return interaction.message.channel.send({ embeds: [embed] })
    } else if (member.roles.cache.has("773006660507664406")) {
      await member.roles.remove('773006660507664406')
      const embed = new Discord.MessageEmbed()
        .setDescription(`${member} your color has been removed <@&773006660507664406>`)
        .setColor("#f00202")
      return interaction.message.channel.send({ embeds: [embed] })
    }
  }
  //AZUL ROLE
  if (interaction.values == 'azul') {
    await interaction.deferUpdate();
    if (!member.roles.cache.has("773004626097340436")) {
      await member.roles.add('773004626097340436')
      const embed = new Discord.MessageEmbed()
        .setDescription(`${member} the color was added to you <@&773004626097340436>!`)
        .setColor("#0179fc")
      return interaction.message.channel.send({ embeds: [embed] })
    } else if (member.roles.cache.has("773004626097340436")) {
      await member.roles.remove('773004626097340436')
      const embed = new Discord.MessageEmbed() 
        .setDescription(`${member} your color has been removed <@&773004626097340436>`)
        .setColor("#0179fc")
      return interaction.message.channel.send({ embeds: [embed] })
    }
  }
  //ROSADO ROLE
  if (interaction.values == 'rosado') {
    await interaction.deferUpdate();
    if (!member.roles.cache.has("773004621277954048")) {
      await member.roles.add('773004621277954048')
      const embed = new Discord.MessageEmbed()
        .setTitle("pink")
        .setDescription(`${member} the color was added to you <@&773004621277954048>!`)
        .setColor("#ff01f3")
      return interaction.message.channel.send({ embeds: [embed] })
    } else if (member.roles.cache.has("773004621277954048")) {
      await member.roles.remove('773004621277954048')
      const embed = new Discord.MessageEmbed()
        .setTitle("pink")
        .setDescription(`${member} your color has been removed <@&773004621277954048>`)
        .setColor("#ff01f3")
      return interaction.message.channel.send({ embeds: [embed] })
    }
  }
  //NARANJA ROLE
  if (interaction.values == 'naranja') {
    await interaction.deferUpdate();
    if (!member.roles.cache.has("773004623287943199")) {
      await member.roles.add('773004623287943199')
      const embed = new Discord.MessageEmbed()
        .setDescription(`${member} the color was added to you <@&773004623287943199>!`)
        .setColor("#ff7d00")
      return interaction.message.channel.send({ embeds: [embed] })
    } else if (member.roles.cache.has("773004623287943199")) {
      await member.roles.remove('773004623287943199')
      const embed = new Discord.MessageEmbed()
        .setDescription(`${member} your color has been removed <@&773004623287943199>`)
        .setColor("#ff7d00")
      return interaction.message.channel.send({ embeds: [embed] })
    }
  }
  //AMARILLO ROLE
  if (interaction.values == 'amarillo') {
    await interaction.deferUpdate();
    if (!member.roles.cache.has("772971809225834498")) {
      await member.roles.add('772971809225834498')
      const embed = new Discord.MessageEmbed()
        .setDescription(`${member} the color was added to you <@&772971809225834498>!`)
        .setColor("#eee60b")
      return interaction.message.channel.send({ embeds: [embed] })
    } else if (member.roles.cache.has("772971809225834498")) {
      await member.roles.remove('772971809225834498')
      const embed = new Discord.MessageEmbed()
        .setDescription(`${member} your color has been removed <@&772971809225834498>`)
        .setColor("#eee60b")
      return interaction.message.channel.send({ embeds: [embed] })
    }
  }
  //NEGRO ROLE
  if (interaction.values == 'negro') {
    await interaction.deferUpdate();
    if (!member.roles.cache.has("784246969441845248")) {
      await member.roles.add('784246969441845248')
      const embed = new Discord.MessageEmbed()
        .setDescription(`${member} the color was added to you <@&784246969441845248>!`)
        .setColor("#191b1e")
      return interaction.message.channel.send({ embeds: [embed] })
    } else if (member.roles.cache.has("784246969441845248")) {
      await member.roles.remove('784246969441845248')
      const embed = new Discord.MessageEmbed()
        .setDescription(`${member} your color has been removed <@&784246969441845248>`)
        .setColor("#191b1e")
      return interaction.message.channel.send({ embeds: [embed] })
    }
  }
  //VERDE ROLE
  if (interaction.values == 'verde') {
    await interaction.deferUpdate();
    if (!member.roles.cache.has("784247696432037890")) {
      await member.roles.add('784247696432037890')
      const embed = new Discord.MessageEmbed()
        .setDescription(`${member} the color was added to you <@&784247696432037890>!`)
        .setColor("#00ff56")
      return interaction.message.channel.send({ embeds: [embed] })
    } else if (member.roles.cache.has("784247696432037890")) {
      await member.roles.remove('784247696432037890')
      const embed = new Discord.MessageEmbed()
        .setDescription(`${member} your color has been removed <@&784247696432037890>`)
        .setColor("#00ff56")
      return interaction.message.channel.send({ embeds: [embed] })
    }
  }
  //BLANCO ROLE
  if (interaction.values == 'blanco') {
    await interaction.deferUpdate();
    if (!member.roles.cache.has("784247218894143538")) {
      await member.roles.add('784247218894143538')
      const embed = new Discord.MessageEmbed()
        .setDescription(`${member} the color was added to you <@&784247218894143538>!`)
        .setColor("#cfcfdc")
      return interaction.message.channel.send({ embeds: [embed] })
    } else if (member.roles.cache.has("784247218894143538")) {
      await member.roles.remove('784247218894143538')
      const embed = new Discord.MessageEmbed()
        .setDescription(`${member} your color has been removed <@&784247218894143538>`)
        .setColor("#cfcfdc")
      return interaction.message.channel.send({ embeds: [embed] })
    }
  }
  //PURPURA ROLE
  if (interaction.values == 'purpura') {
    await interaction.deferUpdate();
    if (!member.roles.cache.has("773004620217057290")) {
      await member.roles.add('773004620217057290')
      const embed = new Discord.MessageEmbed()
        .setDescription(`${member} the color was added to you <@&773004620217057290>!`)
        .setColor("#a800f3")
      return interaction.message.channel.send({ embeds: [embed] })
    } else if (member.roles.cache.has("773004620217057290")) {
      await member.roles.remove('773004620217057290')
      const embed = new Discord.MessageEmbed()
        .setDescription(`${member} your color has been removed <@&773004620217057290>`)
        .setColor("#a800f3")
      return interaction.message.channel.send({ embeds: [embed] })
    }
  }
  //CELESTE ROLE
  if (interaction.values == 'celeste') {
    await interaction.deferUpdate();
    if (!member.roles.cache.has("773006149556764704")) {
      await member.roles.add('773006149556764704')
      const embed = new Discord.MessageEmbed()
        .setDescription(`${member} the color was added to you <@&773006149556764704>!`)
        .setColor("#00cefb")
      return interaction.message.channel.send({ embeds: [embed] })
    } else if (member.roles.cache.has("773006149556764704")) {
      await member.roles.remove('773006149556764704')
      const embed = new Discord.MessageEmbed()
        .setDescription(`${member} your color has been removed <@&773006149556764704>`)
        .setColor("#00cefb")
      return interaction.message.channel.send({ embeds: [embed] })
    }
  }

});

client.login(process.env.TOKEN);