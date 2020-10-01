import { Message } from 'discord.js';

import shuffle from '../util/shuffle';

import StormBotCommand from '../types';

class ShuffleCommand extends StormBotCommand {
  name = 'Shuffle';
  description = 'Shuffles a comma separated list and sends it.';
  usage = 's!shuffle <list of items>';

  constructor() {
    super('shuffle', {
      aliases: ['shuffle']
    });
  }

  async exec(message: Message) {
    return await message.channel.send(
      shuffle(
        message
          .toString()
          .substring(9)
          .split(',')
          .map((listItem) => {
            return listItem.trim();
          })
      ).join(', ')
    );
  }
}

export default ShuffleCommand;
