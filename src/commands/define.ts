import { Message } from 'discord.js';
import fetch from 'node-fetch';

import StormBotCommand from '../types';

class DefineCommand extends StormBotCommand {
  name = 'Color';
  description = 'Defines an English word.';
  usage = 's!define <word>';

  constructor() {
    super('define', {
      aliases: ['define'],
      args: [
        {
          id: 'word',
          type: 'string'
        }
      ]
    });
  }

  async exec(message: Message, args: any) {
    if (args.word) {
      let data = await (
        await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${args.word}`)
      ).json();

      if (data.title === 'No Definitions Found') {
        return await message.channel.send('No Definitions Found');
      }

      data = data[0];

      return await message.channel.send({
        embed: {
          title: args.word.toLowerCase(),
          description: data.phonetics
            .map((phonetic: any) => {
              return phonetic.text;
            })
            .join(', '),
          color: '#a4a4a4',
          fields: data.meanings.map((meaning: any) => {
            return meaning.definitions.map((definition: any) => {
              return {
                name: meaning.partOfSpeech,
                value: definition.definition
              };
            });
          })
        }
      });
    }

    // If args was missing.
    return await message.channel.send(`
Usage:
- s!define [word]
    `);
  }
}

export default DefineCommand;
