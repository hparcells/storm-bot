import { Message } from 'discord.js';

import StormBotCommand from '../types';

import { client } from '../';

class HelpCommand extends StormBotCommand {
  name = 'Help';
  description = 'Give help on all the commands.';
  usage = 's!help';

  constructor() {
    super('help', {
      aliases: ['help']
    });
  }

  async exec(message: Message) {
    return await message.channel.send({
      embed: {
        title: 'Help',
        description: 'All the commands.',
        fields: client.commands
          .filter((command) => {
            if (client.ownerID.toString().includes(message.author.id)) {
              return command;
            }
            return !command.ownerOnly;
          })
          .map((command) => {
            return {
              name: `${command.name} - ${command.usage}`,
              value: command.description
            };
          })
      }
    });
  }
}

export default HelpCommand;
