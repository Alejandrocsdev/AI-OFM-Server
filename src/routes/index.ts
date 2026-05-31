import { Router } from 'express';
import { userRoutes } from './user.routes.js';
import { templateRoutes } from './template.routes.js';

const router = Router();

router.use('/users', userRoutes);
router.use('/templates', templateRoutes);

export const routes = router;
