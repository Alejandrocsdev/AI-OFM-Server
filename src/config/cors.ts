import type { CorsOptions } from 'cors';
import { env } from '../env.js';

const allowedOrigins = [env.ClientUrl];

export const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
      return;
    }

    callback(new Error('Not allowed by CORS'));
  },
  credentials: true,
};
