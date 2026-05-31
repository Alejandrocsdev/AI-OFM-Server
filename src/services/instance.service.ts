import { vastCloudApi, vastConsoleApi } from '../config/vastApi.js';

import { geolocation } from '../utils/geolocation.js';

export class InstanceService {
  public async getInstances(): Promise<unknown> {
    const { data } = await vastConsoleApi.get('/api/v0/instances');
    return data;
  }

  public async searchInstances(): Promise<unknown> {
    const body = {
      gpu_name: { in: ['RTX 5090'] },
      disk_space: { gte: 20 },
      allocated_storage: 20,
      duration: { gte: 604800 },
      type: 'ask',
      rentable: { eq: true },
      verified: { eq: true },
      geolocation: { in: geolocation.europe },
      reliability2: { gte: 0.9 },
      avail_vol_size: { gte: 100 },
      image_tag: { eq: 'pytorch/pytorch:2.8.0-cuda12.8-cudnn9-runtime' },
      direct_port_count: { gte: 2 },
      cuda_max_good: { gte: 12.8 },
      order: [
        ['dph_total', 'asc'],
        ['total_flops', 'asc'],
      ],
      sort_option: { '0': ['dph_total', 'asc'], '1': ['total_flops', 'asc'] },
      limit: 10,
      resource_type: 'gpu',
    };
    const { data } = await vastCloudApi.post('/api/v0/bundles', body);
    return data;
  }

  public async createInstance(offerId: number, volumeId: number, volumeSize: number): Promise<unknown> {
    const body = {
      client_id: 'me',
      image: 'alejandrocsdev/comfyui-vast:cuda12.8',
      image_login: null,
      disk: 20,
      env: {
        '-p 8188:8188': '1',
      },
      onstart: 'bash /workspace/start.sh',
      jupyter_dir: null,
      use_jupyter_lab: true,
      runtype: 'jupyter_direc ssh_direc ssh_proxy',
      min_duration: 604800,
      volume_info: {
        create_new: true,
        volume_id: volumeId,
        size: volumeSize,
        mount_path: '/workspace',
      },
    };
    const { data } = await vastCloudApi.put(`/api/v0/asks/${offerId}`, body);
    return data;
  }

  public async rebootInstance(instanceId: number): Promise<unknown> {
    const { data } = await vastCloudApi.put(`/api/v0/instances/reboot/${instanceId}`);
    return data;
  }

  public async destroyInstance(instanceId: number): Promise<unknown> {
    const { data } = await vastCloudApi.delete(`/api/v0/instances/${instanceId}`);
    return data;
  }
}

export const instanceService = new InstanceService();
