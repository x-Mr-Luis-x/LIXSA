const Discord = require('discord.js');

module.exports = {
  name: "supremep",
  aliases: [],
  async execute(client, message, args) {
    const supreme = [
      "https://i.pinimg.com/originals/2d/fe/a1/2dfea1867eb8efae0b81f621135fa171.jpg",
      "https://i.pinimg.com/236x/39/38/1c/39381cf14ab025065aaff140f8d41a2d.jpg",
      "https://i.pinimg.com/236x/9b/42/3f/9b423f5d9b7374591efbba27a2f98643.jpg",
      "https://i.pinimg.com/originals/55/b6/32/55b6326ae542c371736cb6e46b05916a.jpg",
      "https://i.pinimg.com/550x/71/12/1a/71121a71cf68ac0cd6db95df84ece638.jpg",
      "https://i.pinimg.com/236x/80/d2/32/80d2320aa7e2866762b40873ae5844c6.jpg",
      "https://i.pinimg.com/236x/8d/2a/1e/8d2a1e8341d41c08002a97bbce8b1ba5.jpg",
      "https://i.pinimg.com/736x/f5/1c/bb/f51cbb715aedb6fac3c39eb57c7c9e28.jpg",
      "https://i.pinimg.com/200x150/2b/e2/ca/2be2ca2b45bbdeb35fb200f5436b716d.jpg",
      "https://i.pinimg.com/474x/22/10/94/221094a29c2f8a3162862ad6abb6a996.jpg",
      "https://i.pinimg.com/564x/ed/b1/58/edb158c6be653eddfae6d9969ba6cc13.jpg",
      "https://i.pinimg.com/236x/4f/48/c0/4f48c08716da1a4b724b249291ec1fba.jpg",
      "https://media.discordapp.net/attachments/850145539369599026/926982934815195206/3325b50d34b3444fb690009060bf6d8e.jpg?width=422&height=422",
      "https://toigingiuvedep.vn/wp-content/uploads/2021/11/hinh-anh-anime-ngau-nu-supreme-dep-ca-tinh-chat-luong-nhat-3.jpg",
      "https://toigingiuvedep.vn/wp-content/uploads/2021/11/hinh-anh-anime-ngau-nu-supreme.jpg"
    ];

    // Función matemática para derivar
    function f(x) {
      return Math.sin(x); // Ejemplo simple: f(x) = sin(x)
    }

    // Derivada numérica
    function derivative(f, x, h = 0.00001) {
      return (f(x + h) - f(x)) / h;
    }

    // Generar un índice aleatorio y calcular la derivada en ese punto
    const randomIndex = Math.floor(Math.random() * supreme.length);
    const derivValue = derivative(f, randomIndex);

    // Convertir el valor derivado en un índice válido
    const derivedIndex = Math.abs(Math.round(derivValue * supreme.length)) % supreme.length;

    const selectedImage = supreme[derivedIndex];

    // Crear el embed
    const embed = new Discord.MessageEmbed()
      .setTitle(`_**SUPREME**_`)
      .setColor('RANDOM')
      .setTimestamp()
      .setImage(selectedImage)
      .setFooter(`• Hecho por ${message.author.tag}`, message.author.displayAvatarURL({ format: "png" }));

    await message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } });
  }
};
