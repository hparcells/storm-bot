import { Message } from 'discord.js';
import fetch from 'node-fetch';

import StormBotCommand from '../types';

class QrCommand extends StormBotCommand {
  name = 'QR';
  description = 'Generates a QR code.';
  usage = 's!qr <data>';

  constructor() {
    super('qr', {
      aliases: ['qr']
    });
  }

  async exec(message: Message) {
    const data = message.content.substring(5);

    if (data) {
      // Check if we have attach files permission.
      if (message.guild?.me?.hasPermission('ATTACH_FILES')) {
        return await message.channel.send('', {
          files: [
            await (await fetch(`https://api.qrserver.com/v1/create-qr-code/?data=${data}`)).buffer()
          ]
        });
      }
      return await message.channel.send(`https://api.qrserver.com/v1/create-qr-code/?data=${data}`);
    }

    // If args was missing.
    return await message.channel.send(`
Usage:
- s!qr [data]
    `);
  }
}

export default QrCommand;
