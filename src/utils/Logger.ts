import { Client, TextChannel } from 'discord.js'
import { ILogger } from '../interfaces'

export default class Logger implements ILogger {

  private channel: TextChannel

  constructor (client: Client) {
    client.on('ready', () => {
      this.channel = client.guilds.first().channels.find('name', 'logs') as TextChannel
    })
  }

  async log (message: string) {
    if (this.channel) {
      return this.channel.send(message)
    }
    return
  }

}
