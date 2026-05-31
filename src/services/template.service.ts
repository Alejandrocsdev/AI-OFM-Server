import { vastCloudApi } from '../config/vastApi.js';

export class TemplateService {
  public async getTemplates(userId: number): Promise<unknown> {
    const selectFilters = `{"creator_id":{"eq":${userId}}}`;
    const { data } = await vastCloudApi.get(`/api/v1/template/?select_filters=${selectFilters}`);
    return data;
  }

  public async createTemplate(): Promise<unknown> {
    const body = {
      name: 'ComfyUI-Template',
      desc: 'AI-OFM',
      image: 'alejandrocsdev/comfyui-vast',
      tag: 'cuda12.8',
      repo: 'alejandrocsdev/comfyui-vast',
      href: 'https://hub.docker.com/r/alejandrocsdev/comfyui-vast/',
      private: true,
      readme: '',
      docker_login_user: '',
      docker_login_pass: '',
      docker_login_repo: '',
      env: '-p 8188:8188',
      args_str: '',
      onstart: 'bash /workspace/start.sh',
      runtype: 'jupyter',
      use_jupyter_lab: true,
      use_ssh: true,
      jup_direct: true,
      ssh_direct: true,
      jupyter_dir: null,
      recommended_disk_space: 20,
      extra_filters: {
        cuda_max_good: {
          gte: 12.8,
        },
      },
      vm: false,
      volume_info: [
        {
          name: null,
          path: '/workspace',
          size: 100,
          type: 'machine',
        },
      ],
    };
    const { data } = await vastCloudApi.post('/api/v0/template', body);
    return data;
  }

  public async editTemplate(
    userId: number,
    templateId: number,
    templateHash: string,
    volumeSize: number,
  ): Promise<unknown> {
    const body = {
      id: templateId,
      hash_id: templateHash,
      creator_id: userId,
      name: 'ComfyUI-Template',
      desc: 'AI-OFM',
      image: 'alejandrocsdev/comfyui-vast',
      tag: 'cuda12.8',
      repo: 'alejandrocsdev/comfyui-vast',
      href: 'https://hub.docker.com/r/alejandrocsdev/comfyui-vast/',
      private: true,
      readme: '',
      docker_login_user: '',
      docker_login_pass: '',
      docker_login_repo: '',
      env: '-p 8188:8188',
      args_str: '',
      onstart: 'bash /workspace/start.sh',
      runtype: 'jupyter',
      use_jupyter_lab: true,
      use_ssh: true,
      jup_direct: true,
      ssh_direct: true,
      jupyter_dir: null,
      recommended_disk_space: 20,
      extra_filters: {
        cuda_max_good: {
          gte: 12.8,
        },
      },
      vm: false,
      volume_info: [
        {
          name: null,
          path: '/workspace',
          size: volumeSize,
          type: 'machine',
        },
      ],
    };
    const { data } = await vastCloudApi.put('/api/v1/template', body);
    return data;
  }

  public async deleteTemplate(templateId: number): Promise<unknown> {
    const { data } = await vastCloudApi.delete('/api/v0/template', {
      data: { template_id: templateId },
    });
    return data;
  }
}

export const templateService = new TemplateService();
