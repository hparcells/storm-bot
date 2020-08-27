import { Command } from 'discord-akairo';
import { Message } from 'discord.js';

class FormulaCommand extends Command {
  constructor() {
    super('formula', {
      aliases: ['formula'],
      args: [
        {
          id: 'shape',
          type: 'string'
        }
      ]
    });
  }

  async exec(message: Message) {
    message.channel.send('Not implemented.');
  }
}
