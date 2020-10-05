import { Message } from 'discord.js';

import StormBotCommand from '../types';

class AboutCommand extends StormBotCommand {
  name = 'About';
  description = 'Gives information about the bot.';
  usage = 's!about';

  constructor() {
    super('about', {
      aliases: ['about']
    });
  }

  async exec(message: Message) {
    message.channel.send({
      embed: {
        title: 'About',
        description: 'Storm Bot is a Discord utility bot written in Discord.js.',
        color: '#a4a4a4',
        fields: [
          {
            name: ':computer: Source Code',
            value: 'https://github.com/hparcells/storm-bot'
          }
        ],
        footer: {
          text: 'Created by MythicHunter758#1973'
        }
      }
    });
  }
}

export default AboutCommand;
