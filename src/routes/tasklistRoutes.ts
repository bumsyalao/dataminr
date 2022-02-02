import { Router } from 'express';
import { getTasklistAction, createTasklistAction, updateTasklistAction, addTaskAction, removeTaskAction } from '../controllers/tasklist';

const router = Router();

router.get('/tasklist', getTasklistAction);
router.post('/tasklist', createTasklistAction);
router.put('/tasklist/:id', updateTasklistAction);

//add task to tasklist
router.post('/tasklist/:tasklistId/task/:taskId', addTaskAction);
router.delete('/tasklist/:tasklistId/task/:taskId', removeTaskAction)

// router.delete
// router.put

export default router;