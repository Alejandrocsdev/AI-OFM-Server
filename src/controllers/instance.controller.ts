import { asyncHandler } from '../middlewares/index.js';
import { instanceService } from '../services/instance.service.js';

export class InstanceController {
  public readonly getInstances = asyncHandler(async (req, res) => {
    const data = await instanceService.getInstances();
    res.json(data);
  });

  public readonly searchInstances = asyncHandler(async (req, res) => {
    const data = await instanceService.searchInstances();
    res.json(data);
  });

  public readonly createInstance = asyncHandler(async (req, res) => {
    const { offerId, volumeId, volumeSize } = req.body as {
      offerId: number;
      volumeId: number;
      volumeSize: number;
    };
    const data = await instanceService.createInstance(offerId, volumeId, volumeSize);
    res.json(data);
  });

  public readonly rebootInstance = asyncHandler(async (req, res) => {
    const instanceId = Number(req.params.instanceId);
    const data = await instanceService.rebootInstance(instanceId);
    res.json(data);
  });

  public readonly destroyInstance = asyncHandler(async (req, res) => {
    const instanceId = Number(req.params.instanceId);
    const data = await instanceService.destroyInstance(instanceId);
    res.json(data);
  });
}

export const instanceController = new InstanceController();
