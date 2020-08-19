import { Command } from 'discord-akairo';
import { Message } from 'discord.js';
import { v4 as uuidv4 } from 'uuid';

class UuidCommand extends Command {
  constructor() {
    super('uuid', {
      aliases: ['uuid']
    });
  }

  async exec(message: Message) {
    message.channel.send(uuidv4());
  }
}

export default UuidCommand;
