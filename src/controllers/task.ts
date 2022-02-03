import { pool } from '../dbconfig';
import { Request, Response } from "express";



export const getTaskAction = async (req: Request, res: Response): Promise<void> => {
    const sql = "SELECT * FROM task";

    pool.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        res.status(200).json(result.rows)
    })

};

export const createTaskAction = (req: Request, res: Response): any => {
    const { title } = req.body;
    const updatedAt = new Date(Date.now());
    pool.query('INSERT INTO task (title, updated_at) VALUES ($1, $2)', [title, updatedAt], (err, result) => {
        if (err) { throw err; }

        res.status(201).send(`Task created succesfully ID: ${result.rows[0]}`)
    });
}

export const updateTaskAction = (req: Request, res: Response): any => {
    const { id } = req.params;
    const { title } = req.body;
    const updatedAt = new Date(Date.now());

    pool.query(
        'UPDATE task SET title = $1, updated_at = $2 WHERE id = $3',
        [title, updatedAt, id],
        (error, results) => {
            if (error) {
                throw error
            }
            res.status(200).send(`Task modified with ID: ${id}`)
        }
    )
}

