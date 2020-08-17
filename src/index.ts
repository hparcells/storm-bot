import { AkairoClient } from 'discord-akairo';
import { config as setupEnv } from 'dotenv';
import { botLog } from './util/logger';

// Get access to our env variables in the .env file.
setupEnv();

// Create a client instance.
export const client = new AkairoClient(
  {
    prefix: 's!',
    commandDirectory: './dist/commands/',
    ownerID: '481810179218997266'
  },
  {}
);

// Login using the token.
client.login(process.env.TOKEN as string);

botLog(`Logged in.`);
