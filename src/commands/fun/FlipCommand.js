const { Command, colors } = require('../../utils')
const Discord = require('discord.js');

module.exports = class FlipCommand extends Command {
  constructor(client) {
    super(client)

    this.name = 'flip'
    this.aliases = []
    this.category = 'fun'
  }

  async run(message, args) {
    const msg = ['coroa', 'cara'];
    const moeda = msg[Math.floor(Math.random() * 2)];

    const moedaembed1 = new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true, size: 1024 }))
      .setColor(colors['default'])
      .setDescription(moeda)
      .setTitle('A face da moeda está virada para...')
      .setFooter('🧁・Discord da Jeth', message.guild.iconURL({ dynamic: true, size: 1024 }))

    message.channel.send(moedaembed1);

  }
}