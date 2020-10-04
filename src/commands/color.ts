import { Message } from 'discord.js';
import Color from 'color';

import StormBotCommand from '../types';

class ColorCommand extends StormBotCommand {
  name = 'Color';
  description = 'Gives color data from a certain color.';
  usage = 's!color <color>';

  constructor() {
    super('color', {
      aliases: ['color']
    });
  }

  async exec(message: Message) {
    const colorArg = message.content.substring(8);

    if (colorArg) {
      try {
        const cleanColor = colorArg.trim();
        const color = Color(cleanColor);
        const cleanHex = color.hex().substring(1);

        return await message.channel.send({
          embed: {
            title: `Color Data for ${cleanColor}`,
            color: `#${cleanHex}`,
            fields: [
              {
                name: 'Hex',
                value: `#${cleanHex}`,
                inline: true
              },
              {
                name: 'RGB',
                value: color.rgb(),
                inline: true
              },
              {
                name: 'HSL',
                value: color.hsl(),
                inline: true
              }
              // {
              //   name: 'HSV',
              //   value: color.hsv(),
              //   inline: true
              // },
              // {
              //   name: 'CMYK',
              //   value: color.cmyk(),
              //   inline: true
              // }
            ],
            thumbnail: {
              url: `https://singlecolorimage.com/get/${cleanHex}/500x500`
            },
            footer: {
              text: 'Image Using singlecolorimage.com'
            }
          }
        });
      } catch (error) {
        return await message.channel.send(
          'An error occurred when trying to parse a color from the string.'
        );
      }
    }

    // If args was missing.
    return await message.channel.send(`
Usage:
- s!color [color]
    `);
  }
}

export default ColorCommand;
