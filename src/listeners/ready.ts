const { Listener } = require('discord-akairo');
import { plural } from '@reverse/string';

import { botLog } from '../util/logger';

import { client } from '../';

class ReadyListener extends Listener {
  constructor() {
    super('ready', {
      emitter: 'client',
      event: 'ready'
    });
  }

  exec() {
    botLog(`Logged into ${client.guilds.cache.size} ${plural(client.guilds.cache.size, 'guild')}.`);

    client.user?.setActivity(
      `in ${client.guilds.cache.size} ${plural(client.guilds.cache.size, 'server')}.`
    );
    setInterval(() => {
      client.user?.setActivity(
        `in ${client.guilds.cache.size} ${plural(client.guilds.cache.size, 'server')}.`
      );
    }, 60000);
  }
}

export default ReadyListener;
