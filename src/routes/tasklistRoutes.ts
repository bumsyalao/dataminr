import { Router } from 'express';
import { getTasklistAction, createTasklistAction, updateTasklistAction, addTaskAction, removeTaskAction, getTasklistGroupAction } from '../controllers/tasklist';

const router = Router();

router.get('/tasklist', getTasklistAction);
router.post('/tasklist', createTasklistAction);
router.put('/tasklist/:id', updateTasklistAction);

//add task to tasklist
router.post('/tasklist/:tasklistId/task/:taskId', addTaskAction);
router.delete('/tasklist/:tasklistId/task/:taskId', removeTaskAction)

//get task in tasklist
router.get('/tasklist/:id', getTasklistGroupAction)


export default router;