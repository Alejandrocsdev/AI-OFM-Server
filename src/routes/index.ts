import { Router } from 'express';
import { userRoutes } from './user.routes.js';
// import { templateRoutes } from './template.routes.js';
import { instanceRoutes } from './instance.routes.js';
import { volumeRoutes } from './volume.routes.js';

const router = Router();

router.use('/users', userRoutes);
// router.use('/templates', templateRoutes);
router.use('/instances', instanceRoutes);
router.use('/volumes', volumeRoutes);

export const routes = router;
