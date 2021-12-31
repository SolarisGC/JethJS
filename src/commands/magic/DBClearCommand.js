const { Command } = require('../../utils')

module.exports = class DBClearCommand extends Command {
  constructor(client) {
    super(client)

    this.name = 'dbclear'
    this.aliases = ['limpardb', 'dblimpar']
    this.category = 'magic'
    this.adminOnly = true
  }

  async run(message) {

    this.client.guilds.cache.forEach(g => {
      this.client.database.Guilds.findOneAndDelete(g.id).then(async () => {
        message.channel.send(`${g.name} deletada....`)
      })
    })
    this.client.users.cache.forEach(u => {
      this.client.database.Users.findOneAndDelete(u.id).then(async () => {
        message.channel.send(`${u.tag} deletado...`)
      })
    })
  }
}