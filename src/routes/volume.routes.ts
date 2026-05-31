import { Router } from 'express';
import { volumeController } from '../controllers/volume.controller.js';

const router = Router();

router.get('/', volumeController.getVolumes);
router.delete('/:volumeId', volumeController.deleteVolume);

export const volumeRoutes = router;
