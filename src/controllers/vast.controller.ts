import { asyncHandler } from '../middlewares/index.js';
import { vastService } from '../services/vast.service.js';

export class VastController {
  public readonly getUser = asyncHandler(async (req, res) => {
    const data = await vastService.getUser();
    res.json(data);
  });
}

export const vastController = new VastController();
