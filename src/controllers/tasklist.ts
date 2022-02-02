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

        res.status(201).send(`Tracklist created succesfully ID: ${result.rows[0]}`)
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
            res.status(200).send(`User modified with ID: ${id}`)
        }
    )
}


