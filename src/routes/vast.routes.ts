import { Router } from 'express';
import { vastController } from '../controllers/vast.controller.js';

const router = Router();

router.get('/', vastController.getUser);

export const vastRoutes = router;
