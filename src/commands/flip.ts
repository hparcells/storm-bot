import { Message } from 'discord.js';
import { randomInt } from '@reverse/random';

import StormBotCommand from '../types';

class FlipCommand extends StormBotCommand {
  name = 'Flip';
  description = 'Flips a coin.';
  usage = 's!flip';

  constructor() {
    super('flip', {
      aliases: ['flip', 'coin']
    });
  }

  async exec(message: Message) {
    const result = randomInt(0, 1);

    return await message.channel.send(result ? 'Heads' : 'Tails');
  }
}

export default FlipCommand;
