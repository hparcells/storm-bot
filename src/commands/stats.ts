import { Message } from 'discord.js';

import StormBotCommand from '../types';

import { client } from '..';

class StatsCommand extends StormBotCommand {
  name = 'Stats';
  description = 'Stats of the bot.';
  usage = 's!stats';

  constructor() {
    super('stats', {
      aliases: ['stats'],
      ownerOnly: true
    });
  }

  async exec(message: Message) {
    // Send message.
    return await message.channel.send({
      embed: {
        title: 'Stats',
        description: 'Statistics of Storm Bot',
        fields: [
          {
            name: 'Servers',
            value: client.guilds.cache.size
          },
          {
            name: 'Users',
            value: client.users.cache.size
          },
          {
            name: 'Channels',
            value: client.channels.cache.size
          },
          {
            name: 'Memory Usage',
            value: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`
          }
        ],
        color: '#a4a4a4'
      }
    });
  }
}

export default StatsCommand;
