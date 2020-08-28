import { AkairoClient, CommandHandler, ListenerHandler } from 'discord-akairo';

export class StormBotClient extends AkairoClient {
  commandHandler: CommandHandler;
  listenerHandler: ListenerHandler;

  constructor() {
    super(
      {
        ownerID: '481810179218997266'
      },
      {}
    );

    // Set some things.
    this.commandHandler = new CommandHandler(this, {
      directory: './dist/commands',
      prefix: 's!'
    });
    this.listenerHandler = new ListenerHandler(this, {
      directory: './dist/listeners'
    });

    // Load some things.
    this.commandHandler.loadAll();
    this.commandHandler.useListenerHandler(this.listenerHandler);

    this.listenerHandler.loadAll();
  }
}
