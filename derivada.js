const Discord = require('discord.js');
const math = require('mathjs');

module.exports = {
    name: 'math',
    alias: [],

    async execute(bot, message, args){
        if (!args[0])
            return message.reply({ content: "**Ingrese algo para calcular**", allowedMentions: { repliedUser: false } });

        let result;
        let expression = args.join(' ').replace(/[x]/gi, '*').replace(/[,]/g, '.').replace(/[÷]/gi, '/');

        try {
            if (expression.startsWith('derivar')) {
                // Extraer la función y la variable de la expresión
                let parts = expression.split(' ');
                if (parts.length < 3) {
                    throw new Error("Formato incorrecto para derivada. Use `derivar [función] [variable]`");
                }
                let func = parts[1];
                let variable = parts[2];
                // Calcular la derivada
                result = math.derivative(func, variable).toString();
            } else {
                // Evaluar la expresión matemática
                result = math.evaluate(expression);
            }
        } catch (e) {
            return message.reply({ 
                content: `**¡Ingrese un cálculo válido!**\n\n**Lista de cálculos** - \n1. **ecuación sqrt** - \`sqrt(3^2 + 4^2) = 5\`\n2. **Unidades a Unidades** - \`2 pulgadas a cm = 0.58\`\n3. **Expresiones complejas como** - \`cos(45 grados) = 0.7071067811865476\`\n4. **Expresiones matemáticas básicas** - \`+, -, ^, /, decimales\` = **2.5 - 2 = 0.5**\n5. **Derivadas** - \`derivar [función] [variable]\` = **derivar x^2 x = 2*x**`,
                allowedMentions: { repliedUser: false } 
            });
        }

        let embed = new Discord.MessageEmbed()
            .setColor('#007ae8')
            .setAuthor(
                `💙 LIXSA CALCULATOR 💙`,
                bot.user.displayAvatarURL({ dynamic: true })
            )
            .addField(
                '**Operación**',
                `\`\`\`js\n${expression}\`\`\``
            )
            .addField('**Resultado**', `\`\`\`js\n${result}\`\`\``);
        message.channel.send({ embeds: [embed] });
    }
};