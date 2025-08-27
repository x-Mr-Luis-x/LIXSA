const Discord = require('discord.js');

module.exports = {
	name: 'canvas',
	aliases: [],
	execute: async (client, message, args) => {

		const Canvas = require('canvas');

    const user = message.author || message.mentions.members.first()

    const canvas = Canvas.createCanvas(1018, 468);
    const ctx = canvas.getContext('2d');
    const background = await Canvas.loadImage("https://wallpaperaccess.com/full/2523778.jpg")
      ctx.drawImage(background, 0, 0, canvas.width, canvas.height)

    ctx.fillStyle = "#fcfcfc"
    ctx.font = "28px sans-serif"

    ctx.fillText("Perfil", 460, 340)
    ctx.fillText(`${message.author.tag}`, 460, 340)
    
    ctx.beginPath()
    ctx.arc(247, 238, 175, 0, Math.PI * 2, true)
    ctx.closePath()
    ctx.clip()

    const avatar = await Canvas.loadImage(message.author.displayAvatarURL({ format: 'png', size: 1024 }))
		ctx.drawImage(avatar, 72, 63, 350, 350)

		const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'profile.png');

		return message.channel.send({ files: [attachment] });
	},
};