import { Router } from 'express';
import { getTasklistAction, createTasklistAction } from '../controllers/tasklist';

const router = Router();

router.get('/tasklist', getTasklistAction);
router.post('/tasklist', createTasklistAction);
// router.delete
// router.put

export default router;