import { pool } from '../dbconfig';
import { Request, Response } from "express";



export const getTasklistAction = async (req: Request, res: Response): Promise<void> => {
    const client = await pool.connect();
    const sql = "SELECT * FROM tasklist";

    client.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        res.status(200).json(result.rows)
    })

    client.release();

};

export const createTasklistAction = (req: Request, res: Response): any => {
    const { title } = req.body;
    const updatedAt = new Date(Date.now());
    pool.query('INSERT INTO tasklist (title, updated_at) VALUES ($1, $2)', [title, updatedAt], (err, result) => {
        if (err) { throw err; }

        res.status(201).send(`Tasklist created succesfully ID: ${result.rows[0]}`)
    });
}


export const updateTasklistAction = (req: Request, res: Response): any => {
    const { id } = req.params;
    const { title } = req.body;
    const updatedAt = new Date(Date.now());

    pool.query(
        'UPDATE tasklist SET title = $1, updated_at = $2 WHERE id = $3',
        [title, updatedAt, id],
        (error, results) => {
            if (error) {
                throw error
            }
            res.status(200).send(`Tasklist modified with ID: ${id}`)
        }
    )
}


// Select task.id task.title from board_task inner join task on board_task.task_id = task.id where board_task.board_id=121212 (board id)

//Add task to task list.

export const addTaskAction = async (req: Request, res: Response): Promise<any> => {
    const { tasklistId, taskId } = req.params;
    const updatedAt = new Date(Date.now());

    //check if task and tasklist is already is task group
    //find task list find task and update tasklist_group
    //check if task already exist in task tasklist_group

    pool.query('SELECT * FROM tasklist_group WHERE tasklist_id = $1 AND task_id = $2 ', [tasklistId, taskId], (error, tasklistGroup) => {
        if (error) { throw error; }

        if (tasklistGroup.rows.length) { res.status(409).send('Task already exists in tasklist'); }
        pool.query('SELECT * FROM tasklist WHERE id = $1', [tasklistId], (error, tasklist) => {
            if (error) {
                throw error;
            }
            if (!tasklist) {
                res.status(404).send('Tasklist does not exist');
            }
            if (tasklist) {
                pool.query('SELECT * FROM task WHERE id = $1', [taskId], (error, task) => {
                    if (error) { throw error; }
                    if (!task) {
                        res.status(404).send('Task does not exist');
                    }
                    pool.query('INSERT INTO tasklist_group (task_id, tasklist_id, updated_at) VALUES ($1, $2, $3)', [taskId, tasklistId, updatedAt], (error, tasklistGroup) => {
                        if (error) { throw error; }

                        res.status(201).send(`Task ${taskId} succesfully added to tasklist ${tasklistId}`)

                    });

                });
            }
        });

    });

}

//Remove task from task list
export const removeTaskAction = async (req: Request, res: Response): Promise<any> => {
    const { tasklistId, taskId } = req.params;

    pool.query('DELETE FROM tasklist_group WHERE tasklist_id = $1 AND task_id = $2 ', [tasklistId, taskId], (error, tasklistGroup) => {
        if (error) { throw error; }

        res.status(200).send(`Task ${taskId} succesfully deleted from tasklist ${tasklistId}`)

    });
}

//get Tasks in Tasklist
export const getTasklistGroupAction = (req: Request, res: Response): any => {
    const { id } = req.params;

    pool.query('SELECT task_id, tasklist_id FROM tasklist_group INNER JOIN task ON tasklist_group.task_id = task.id WHERE tasklist_group.tasklist_id = $1', [id], (error, result) => {
        if (error) { throw error; }

        res.status(200).json(result.rows)

    });
}


