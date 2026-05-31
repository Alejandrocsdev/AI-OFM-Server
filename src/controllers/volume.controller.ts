import { asyncHandler } from '../middlewares/index.js';
import { volumeService } from '../services/volume.service.js';

export class VolumeController {
  public readonly getVolumes = asyncHandler(async (req, res) => {
    const data = await volumeService.getVolumes();
    res.json(data);
  });

  public readonly deleteVolume = asyncHandler(async (req, res) => {
    const volumeId = Number(req.params.volumeId);
    const data = await volumeService.deleteVolume(volumeId);
    res.json(data);
  });
}

export const volumeController = new VolumeController();
