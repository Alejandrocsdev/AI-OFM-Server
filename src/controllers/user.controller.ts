import { asyncHandler } from '../middlewares/index.js';
import { userService } from '../services/user.service.js';

export class UserController {
  public readonly getUser = asyncHandler(async (req, res) => {
    const data = await userService.getUser();
    res.json(data);
  });
}

export const userController = new UserController();
