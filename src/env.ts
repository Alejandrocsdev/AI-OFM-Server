import { config } from 'dotenv';

config({ quiet: true });

export const env = {
  NodeEnv: getEnv('NODE_ENV'),
  Port: getPort('PORT'),
  VastApiKey: getEnv('VAST_API_KEY'),
  ClientUrl: getEnv('CLIENT_URL'),
};

function getEnv(name: string): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(`[Env] Missing environment variable: ${name}`);
  }

  return value;
}

function getPort(name: string): number {
  const value = Number(getEnv(name));

  if (!Number.isInteger(value) || value < 1 || value > 65535) {
    throw new Error(`[Env] Invalid port: ${name}`);
  }

  return value;
}
