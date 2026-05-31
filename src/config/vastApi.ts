import axios from 'axios';
import { env } from '../env.js';

export const vastConsoleApi = axios.create({
  baseURL: 'https://console.vast.ai',
  headers: { Authorization: `Bearer ${env.VastApiKey}` },
});

export const vastCloudApi = axios.create({
  baseURL: 'https://cloud.vast.ai',
  headers: { Authorization: `Bearer ${env.VastApiKey}` },
});
