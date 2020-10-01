import { AkairoClient, CommandHandler, ListenerHandler } from 'discord-akairo';

import StormBotCommand from './types';
import ColorCommand from './commands/color';
import DefineCommand from './commands/define';
import FlipCommand from './commands/flip';
import HelpCommand from './commands/help';
import HttpCommand from './commands/http';
import OneCommand from './commands/one';
import PingCommand from './commands/ping';
import QrCommand from './commands/qr';
import RandomCommand from './commands/random';
import RandomColorCommand from './commands/random-color';
import ShuffleCommand from './commands/shuffle';
import StatsCommand from './commands/stats';
import UuidCommand from './commands/uuid';

export class StormBotClient extends AkairoClient {
  commandHandler: CommandHandler;
  listenerHandler: ListenerHandler;

  commands: StormBotCommand[] = [
    new ColorCommand(),
    new DefineCommand(),
    new FlipCommand(),
    new HelpCommand(),
    new HttpCommand(),
    new OneCommand(),
    new PingCommand(),
    new QrCommand(),
    new RandomCommand(),
    new RandomColorCommand(),
    new ShuffleCommand(),
    new StatsCommand(),
    new UuidCommand()
  ];

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
    this.commands.forEach((command) => {
      this.commandHandler.register(command);
    });
    this.commandHandler.useListenerHandler(this.listenerHandler);

    this.listenerHandler.loadAll();
  }
}
