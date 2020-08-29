import { Message } from 'discord.js';

import StormBotCommand from '../types';

class HttpCommand extends StormBotCommand {
  name = 'HTTP';
  description = 'Provides a image of a HTTP status code courtesy of HTTP Cats.';
  usage = 's!http <status code>';

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
