import { vastConsoleApi } from '../config/vastApi.js';

export class UserService {
  public async getUser(): Promise<unknown> {
    const { data } = await vastConsoleApi.get('/api/v0/users/current');
    return data;
  }
}

export const userService = new UserService();
