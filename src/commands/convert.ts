import { Message } from 'discord.js';
import convert from 'convert-units';

import StormBotCommand from '../types';

class ConvertCommand extends StormBotCommand {
  name = 'Convert';
  description = 'Converts between units.';
  usage = 's!convert <amount> <starting unit> <ending unit>';

  constructor() {
    super('convert', {
      aliases: ['convert'],
      args: [
        {
          id: 'amount',
          type: 'number'
        },
        {
          id: 'startingUnit',
          type: 'string'
        },
        {
          id: 'endingUnit',
          type: 'string'
        }
      ]
    });
  }

  async exec(message: Message, args: any) {
    if (!isNaN(Number(args.amount)) && isNaN(args.startingUnit) && isNaN(args.endingUnit)) {
      try {
        return message.channel.send(
          `${convert(Number(args.amount)).from(args.startingUnit).to(args.endingUnit)} ${
            args.endingUnit
          }`
        );
      } catch (e) {
        return message.channel.send('Invalid conversion.');
      }
    }

    // If args was missing.
    return await message.channel.send(`
Usage:
- s!convert <amount> <starting unit> <ending unit>
    `);
  }
}

export default ConvertCommand;
