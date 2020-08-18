import { Command } from 'discord-akairo';
import { Message } from 'discord.js';
import { randomInt } from '@reverse/random';

class RandomCommand extends Command {
  constructor() {
    super('random', {
      aliases: ['random', 'rand'],
      args: [
        {
          id: 'highLow',
          type: 'number'
        },
        {
          id: 'high',
          type: 'number'
        }
      ]
    });
  }

  async exec(message: Message, args: any) {
    // If two numbers are provided.
    if (typeof args.highLow === 'number' && typeof args.high === 'number') {
      if (args.highLow > args.high) {
        return await message.channel.send(
          'Second number must be greater than or equal to the first.'
        );
      }
      return await message.channel.send(randomInt(args.highLow, args.high));
    }

    // If only one number is provided.
    if (typeof args.highLow === 'number' && typeof args.high === 'string') {
      if (args.highLow > 0) {
        return await message.channel.send(randomInt(1, args.highLow));
      }
      if (args.highLow < 0) {
        return await message.channel.send(randomInt(args.highLow, -1));
      }

      return await message.channel.send(`
Usage:
Providing only one argument, automatically sets the low to either 1 or -1.
- s!random [high]
- s!random [low] [high]
      `);
    }

    // If args was bad.
    return await message.channel.send('Arguments must be numbers.');
  }
}

export default RandomCommand;
