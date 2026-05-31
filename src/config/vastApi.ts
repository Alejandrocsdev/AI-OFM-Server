import axios from 'axios';
import { env } from '../env.js';

export const vastApi = axios.create({
  baseURL: 'https://console.vast.ai',
  headers: { Authorization: `Bearer ${env.VastApiKey}` },
});
