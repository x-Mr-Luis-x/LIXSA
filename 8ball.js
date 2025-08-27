const Discord = require("discord.js");

module.exports =
{
    name: "8ball",
    alias: ["8b"],
    
    execute(client, message, args){
        const pregunta = args.join(" ")
        if(!pregunta) return message.channel.send("DEBES PREGUNTAR ALGO :|")

        let respuestas = [ "Si", "No", "Talves", "Pregunta Mas Tarde", "no es probable", "probablemente si", "lixsa no entiende tu pregunta :(", "No wey sigue soñando", "ni tu te la crees", "No lo sé", "Es algo que no puedo asegurar", "Cielos! parece que lixsa tiene que irse, pregunta más tarde :)", "ni tu te la crees", "Tal vez nunca suceda", "Ten Fe en que sucederá", "Asu no quisas sea posible", "Lo que diga tu corazón", "Hay cosas que no se pueden" ]
        let random = respuestas[Math.floor(Math.random() * respuestas.length)];


    const embed = new Discord.MessageEmbed()
        .setTitle("🎱 8BALL DE LIXSA")
        .setDescription(`PREGUNTA:\n**${pregunta}**\n\nRESPUESTA:\n**${random}**`)
        .setThumbnail('https://i.imgur.com/9li0pRl.png')
        .setColor("RANDOM")

        message.channel.send({ embeds: [embed] })

    }

}