import { Router } from 'express';
import { userRoutes } from './user.routes.js';
// import { templateRoutes } from './template.routes.js';
import { instanceRoutes } from './instance.routes.js';

const router = Router();

router.use('/users', userRoutes);
// router.use('/templates', templateRoutes);
router.use('/instances', instanceRoutes);

export const routes = router;
