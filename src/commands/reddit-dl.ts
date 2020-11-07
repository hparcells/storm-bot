import { Message } from 'discord.js';

import StormBotCommand from '../types';

class RedditDownloadCommand extends StormBotCommand {
  name = 'Reddit Download';
  description = 'Gets a URL to download media on Reddit.';
  usage = 's!rdl <reddit post url>';

  constructor() {
    super('rdl', {
      aliases: ['rdl'],
      args: [
        {
          id: 'url',
          type: 'string'
        }
      ]
    });
  }

  async exec(message: Message, args: any) {
    if (args.url) {
      return await message.channel.send({
        embed: {
          title: 'Reddit Download',
          description: `Your download is available [here](https://viddit.red/?url=${args.url}).`,
          color: '#a4a4a4'
        }
      });
    }

    // If args was missing.
    return await message.channel.send(`
Usage:
- s!rdl <reddit post url>
    `);
  }
}

export default RedditDownloadCommand;
