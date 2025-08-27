const Discord = require('discord.js');
const math = require('mathjs');

module.exports = {
		name: 'math-p',
		alias: [],
	
	async execute(bot, message, args){
		if (!args[0])
			return message.reply({ content: "**Ingrese algo para calcular**", allowedMentions: { repliedUser: false } })

		let result;
		try {
			result = math.evaluate(
				args
					.join(' ')
					.replace(/[x]/gi, '*')
					.replace(/[,]/g, '.')
					.replace(/[÷]/gi, '/')
			);
		} catch (e) {
			return  message.reply({ content: "**¡Ingrese un cálculo válido!**\n\n**Lista de cálculos** - \n1. **ecuación sqrt** - `sqrt(3^2 + 4^2) = 5`\n2. **Unidades a Unidades** - `2 pulgadas a cm = 0.58`\n3. **Expresiones complejas como** - `cos(45 grados) = 0.7071067811865476`\n4. **Expresiones matemáticas básicas** - `+, -, ^, /, decimales` = **2.5 - 2 = 0.5**", allowedMentions: { repliedUser: false } })
		}

		let embed = new Discord.MessageEmbed()
			.setColor('#007ae8')
			.setAuthor(
				`💙 LIXSA CALCULATOR 💙`,
				bot.user.displayAvatarURL({ dynamic: true })
			)
			.addField(
				'**Operación**',
				`\`\`\`js\n${args
					.join('')
					.replace(/[x]/gi, '*')
					.replace(/[,]/g, '.')
					.replace(/[÷]/gi, '/')}\`\`\``
			)
			.addField('**Resultado**', `\`\`\`js\n${result}\`\`\``)
		message.channel.send({ embeds: [embed] });
	}
};
