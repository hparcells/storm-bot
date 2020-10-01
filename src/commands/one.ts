import { Message } from 'discord.js';
import { randomOf } from '@reverse/random';

import StormBotCommand from '../types';

class OneCommand extends StormBotCommand {
  name = 'One';
  description = 'Picks a random item from a comma separated list and sends it.';
  usage = 's!one <list of items>';

  constructor() {
    super('one', {
      aliases: ['one']
    });
  }

  async exec(message: Message) {
    return await message.channel.send(
      randomOf(
        message
          .toString()
          .substring(6)
          .split(',')
          .map((listItem) => {
            return listItem.trim();
          })
      )
    );
  }
}

export default OneCommand;
