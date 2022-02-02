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

export const createTasklistAction = (req: Request, res: Response): any => {
    const { title, tasklist } = req.body;
    const updatedAt = new Date(Date.now());
    pool.query('SELECT * FROM tasklist WHERE title = $1', [tasklist], (err, result) => {
        if (result.rows.length) {
            pool.query('INSERT INTO task (title, tasklist, updatedat) VALUES ($1, $2)', [title, tasklist, updatedAt], (err, result) => {
                if (err) { throw err; }

                res.status(201).send(`Tracklist created succesfully ID: ${result}`)
            });
        }
        if (err) { throw err; }
    })
}



