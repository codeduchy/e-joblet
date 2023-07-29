import { Router } from 'express';
const router = Router();
import {
  validateIdParam,
  validateJobInput,
} from '../middleware/validationMiddleware.js';
import { checkForTestUser } from '../middleware/authMiddleware.js';

import {
  getJob,
  getAllJobs,
  createJob,
  updateJob,
  deleteJob,
  showStats,
} from '../controllers/jobController.js';

router.get('/', getAllJobs);
router.post('/', checkForTestUser, validateJobInput, createJob);

router.route('/stats').get(showStats);

router
  .route('/:id')
  .get(validateIdParam, getJob)
  .patch(checkForTestUser, validateJobInput, validateIdParam, updateJob)
  .delete(checkForTestUser, validateIdParam, deleteJob);

export default router;
