import { Router } from 'express';
import { getTaskAction, createTaskAction, updateTaskAction } from '../controllers/task';

const router = Router();

router.get('/task', getTaskAction);
router.post('/task', createTaskAction);
router.put('/task/:id', updateTaskAction);
// router.delete
// router.put

export default router;