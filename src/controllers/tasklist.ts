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
    pool.query('INSERT INTO tasklist (title, updatedat) VALUES ($1, $2)', [title, updatedAt], (err, result) => {
        if (err) { throw err; }

        console.log(result.oid, '====')
        res.status(201).send(`Tracklist created succesfully ID: ${result.oid}`)
    });
}


