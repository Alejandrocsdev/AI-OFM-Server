import { vastApi } from '../config/vastApi.js';

export class VastService {
  public async getUser(): Promise<unknown> {
    const { data } = await vastApi.get('/api/v0/users/current');
    return data;
  }
}

export const vastService = new VastService();
