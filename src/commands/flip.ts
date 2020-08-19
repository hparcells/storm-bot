import { Command } from 'discord-akairo';
import { Message } from 'discord.js';
import { randomInt } from '@reverse/random';

class FlipCommand extends Command {
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
