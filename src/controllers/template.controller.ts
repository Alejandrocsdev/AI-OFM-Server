// import { asyncHandler } from '../middlewares/index.js';
// import { templateService } from '../services/template.service.js';

// export class TemplateController {
//   public readonly getTemplates = asyncHandler(async (req, res) => {
//     const userId = Number(req.params.userId);
//     const data = await templateService.getTemplates(userId);
//     res.json(data);
//   });

//   public readonly createTemplate = asyncHandler(async (_req, res) => {
//     const data = await templateService.createTemplate();
//     res.json(data);
//   });

//   public readonly editTemplate = asyncHandler(async (req, res) => {
//     const { userId, templateId, templateHash, volumeSize } = req.body as {
//       userId: number;
//       templateId: number;
//       templateHash: string;
//       volumeSize: number;
//     };
//     const data = await templateService.editTemplate(userId, templateId, templateHash, volumeSize);
//     res.json(data);
//   });

//   public readonly deleteTemplate = asyncHandler(async (req, res) => {
//     const templateId = Number(req.params.templateId);
//     const data = await templateService.deleteTemplate(templateId);
//     res.json(data);
//   });
// }

// export const templateController = new TemplateController();
