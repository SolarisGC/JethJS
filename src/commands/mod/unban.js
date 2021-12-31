const { Command, colors } = require('../../utils')
const { MessageEmbed } = require('discord.js')

module.exports = class unban extends Command {
  constructor(client) {
    super(client)

    this.aliases = ['desban', 'desbanir', 'appeal']
    this.category = 'mod'
    this.subcommandsOnly = false
  }

  async run(message, args) {

    const usuario = await this.client.users.fetch(args[0].replace(/[<@!>]/g, ''))
    const reason = args
    const embedA = new MessageEmbed()

      .setTimestamp()
      .setColor(colors['mod'])
      .setTitle('**Err:**', `${usuario}`, true)
      .setDescription('Missing Permissions') // inline false
      .addField('*Verifique se você possui a permissão:*', '`BAN_MEMBERS`', true)
      .setFooter('🧁・Discord da Jeth', message.guild.iconURL({ dynamic: true, size: 1024 }))
    if (!message.member.permissions.has('BAN_MEMBERS')) return message.channel.send({ embeds: [embedA] })

    if (!args[0]) return message.channel.send(`**${message.author}**,Insira o id do membro para eu desbanir ele.`)

    const embed = new MessageEmbed()

      .setColor('#030303')
      .setTitle('**Ação | Unban**')
      .setThumbnail(usuario.displayAvatarURL({ format: usuario.avatar.startsWith('a_') ? 'gif' : 'png' }))
      .setDescription(`\n<:Kaeltec:673592197177933864> **Staff:** ${message.author} \n**ID:** ${message.author.id}` + `\n<:Kaeltec:673592197177933864> **Usuário:** ${usuario.username} \n**ID:** ${usuario.id}`)
      .setFooter('🧁・Discord da Jeth', message.guild.iconURL({ dynamic: true, size: 1024 }))
      .setTimestamp(new Date());

    message.guild.members.unban(args[0]).then(msg => {
      message.channel.send({ embeds: [embed] })
    }).catch(err => {
      message.channel.send(`**${message.author}** Este usuário não está banido!`)

    })
  }
}