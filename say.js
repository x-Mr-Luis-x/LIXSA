const Discord = require("discord.js");

module.exports = 
{
    name: "say",
    alias: [],
    
    execute(client, message, args){

      let permiso = message.member.permissions.has("MANAGE_MESSAGES")
      if(!permiso) return message.channel.send("PERMISOS FALTANTES: GESTIONAR MENSAJES :|")
      
        const mensaje = args.join(" ")
        if(!mensaje) return message.channel.send("Debes escribir algo!")

        setTimeout(function(){
            message.delete()
            message.channel.send(`${mensaje}`)
        }, 100)

    }
    
}