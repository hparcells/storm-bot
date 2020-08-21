import { Command } from 'discord-akairo';
import { Message } from 'discord.js';
import fetch from 'node-fetch';

class QrCommand extends Command {
  constructor() {
    super('qr', {
      aliases: ['qr', 'qrcode'],
      args: [
        {
          id: 'data',
          type: 'string'
        }
      ]
    });
  }

  async exec(message: Message, args: any) {
    if (args.data) {
      // Check if we have attach files permission.
      if (message.guild?.me?.hasPermission('ATTACH_FILES')) {
        return await message.channel.send('', {
          files: [
            await (
              await fetch(`https://api.qrserver.com/v1/create-qr-code/?data=${args.data}`)
            ).buffer()
          ]
        });
      }
      return await message.channel.send(
        `https://api.qrserver.com/v1/create-qr-code/?data=${args.data}`
      );
    }

    // If args was missing.
    return await message.channel.send(`
Usage:
- s!qr [data]
    `);
  }
}

export default QrCommand;
