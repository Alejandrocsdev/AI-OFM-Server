import { Router } from 'express';
import { templateController } from '../controllers/template.controller.js';

const router = Router();

router.get('/:userId', templateController.getTemplates);
router.post('/', templateController.createTemplate);
router.put('/', templateController.editTemplate);
router.delete('/:templateId', templateController.deleteTemplate);

export const templateRoutes = router;
