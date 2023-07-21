import { Router } from 'express';
const router = Router();
import { validateJobInput } from '../middleware/validationMiddleware.js';

import {
  getJob,
  getAllJobs,
  createJob,
  updateJob,
  deleteJob,
} from '../controllers/jobController.js';

router.get('/', getAllJobs);
router.post('/', validateJobInput, createJob);

router
  .route('/:id')
  .get(getJob)
  .patch(validateJobInput, updateJob)
  .delete(deleteJob);

export default router;
