import { Message } from 'discord.js';

import StormBotCommand from '../types';

class PingCommand extends StormBotCommand {
  name = 'Ping';
  description = 'Ping of the bot.';
  usage = 's!ping';

  constructor() {
    super('ping', {
      aliases: ['ping']
    });
  }

  async exec(message: Message) {
    // Send the first message.
    const sent = (await message.channel.send({
      embed: {
        title: ':ping_pong: Ponging in Process',
        description: 'Ponging...',
        color: '#a4a4a4'
      }
    })) as Message;

    // Get the difference between the two.
    const timeDiff = sent.createdAt.valueOf() - message.createdAt.valueOf();

    // Update message.
    return sent.edit({
      embed: {
        title: ':ping_pong: Pong!',
        description: `${timeDiff} ms`,
        color: '#a4a4a4'
      }
    });
  }
}

export default PingCommand;
