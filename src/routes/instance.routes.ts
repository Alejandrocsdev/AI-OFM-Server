import { Router } from 'express';
import { instanceController } from '../controllers/instance.controller.js';

const router = Router();

router.get('/search', instanceController.searchInstances);
router.get('/', instanceController.getInstances);
router.post('/', instanceController.createInstance);
router.post('/:instanceId/start', instanceController.startInstance);
router.post('/:instanceId/stop', instanceController.stopInstance);
router.post('/:instanceId/reboot', instanceController.rebootInstance);
router.delete('/:instanceId', instanceController.destroyInstance);

export const instanceRoutes = router;
