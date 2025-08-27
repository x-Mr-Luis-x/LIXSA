const Discord = require("discord.js");
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');
const simplydjs = require('simply-djs');
module.exports = {
  name: "calc",
  aliases: ["calculator"],
  
  async execute(client, message, args) {
  simplydjs.calculator(message, {
      embedColor: '#007ae8'
    })
  }
}

