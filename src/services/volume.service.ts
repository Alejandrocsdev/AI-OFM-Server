import { vastConsoleApi } from '../config/vastApi.js';

export class VolumeService {
  public async getVolumes(): Promise<unknown> {
    const { data } = await vastConsoleApi.get('/api/v0/volumes');
    return data;
  }

  public async deleteVolume(volumeId: number): Promise<unknown> {
    const { data } = await vastConsoleApi.delete('/api/v0/volumes', {
      data: { id: volumeId },
    });
    return data;
  }
}

export const volumeService = new VolumeService();
