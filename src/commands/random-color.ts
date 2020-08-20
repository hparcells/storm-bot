import { Command } from 'discord-akairo';
import { Message } from 'discord.js';

class RandomColorCommand extends Command {
  constructor() {
    super('randomcolor', {
      aliases: ['randomcolor']
    });
  }

  async exec(message: Message) {
    // Random color.
    const color = Math.floor(Math.random() * 16777215).toString(16);

    return message.channel.send({
      embed: {
        title: 'Random Color',
        description: `#${color}`,
        color: `#${color}`,
        thumbnail: {
          url: `https://singlecolorimage.com/get/${color}/500x500`
        },
        footer: {
          text: 'Image Using singlecolorimage.com'
        }
      }
    });
  }
}

export default RandomColorCommand;
