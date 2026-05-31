import { Router } from 'express';
import { vastRoutes } from './vast.routes.js';

const router = Router();

router.use('/vast', vastRoutes);

export const routes = router;
