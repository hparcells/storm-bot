import { Message } from 'discord.js';
import { v4 as uuidv4 } from 'uuid';

import StormBotCommand from '../types';

class UuidCommand extends StormBotCommand {
  name = 'UUID';
  description = 'Random UUID.';
  usage = 's!uuid';

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
