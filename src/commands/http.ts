import { Command } from 'discord-akairo';
import { Message } from 'discord.js';

class HttpCommand extends Command {
  constructor() {
    super('http', {
      aliases: ['http', 'httpcat'],
      args: [
        {
          id: 'code',
          type: 'string'
        }
      ]
    });
  }

  async exec(message: Message, args: any) {
    if (args.code) {
      // Check if we have attach files permission.
      if (message.guild?.me?.hasPermission('ATTACH_FILES')) {
        return await message.channel.send('', { files: [`https://http.cat/${args.code}.png`] });
      }
      return await message.channel.send(`https://http.cat/${args.code}.png`);
    }

    // If args was missing.
    return await message.channel.send(`
Usage:
- s!http [code]
    `);
  }
}

export default HttpCommand;
