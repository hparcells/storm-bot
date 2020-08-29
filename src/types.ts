import { Command } from 'discord-akairo';

abstract class StormBotCommand extends Command {
  abstract name: string;
  abstract description: string;
  abstract usage: string;
}

export default StormBotCommand;
