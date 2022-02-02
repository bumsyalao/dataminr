import { Router } from 'express';
import { getTasklistAction, createTasklistAction, updateTasklistAction } from '../controllers/tasklist';

const router = Router();

router.get('/tasklist', getTasklistAction);
router.post('/tasklist', createTasklistAction);
router.put('/tasklist/:id', updateTasklistAction);

// router.delete
// router.put

export default router;