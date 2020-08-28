import { config as setupEnv } from 'dotenv';

import { StormBotClient } from './client';

// Get access to our env variables in the .env file.
setupEnv();

// Create a client instance.
export const client = new StormBotClient();

// Login using the token.
client.login(process.env.TOKEN as string);
