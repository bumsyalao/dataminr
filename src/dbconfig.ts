/* tslint:disable */
import { Pool } from 'pg';
require('make-runnable');


const config = {
  user: 'bunmialao', //this is the db user credential
  database: 'taskdb',
  password: 'bumskid123',
  port: 5432,
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000,
};

export const pool = new Pool(config);


pool.connect(function (err, client, done) {
  if (err) throw new Error(err as any);
  console.log("Connected");
});


export const createTables = () => {
  const task = `CREATE TABLE IF NOT EXISTS
      task(
        id SERIAL PRIMARY KEY,
        title VARCHAR(128) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )`;
  pool.query(task)
    .then((res) => {
      console.log("Created task succesfully", res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });

  const tasklist = `CREATE TABLE IF NOT EXISTS
    tasklist(
      id SERIAL PRIMARY KEY,
      title VARCHAR(128) NOT NULL,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    )`;
  pool.query(tasklist)
    .then((res) => {
      console.log("Created task list succesfully", res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });

  const taskgroup = `CREATE TABLE IF NOT EXISTS
    taskgroup(
      tasklist_id INT,
      task_id INT,
      updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      PRIMARY KEY(taskgroup_id),
      CONSTRAINT (taskgroup_tasklist_id, taskgroup_task_id)
        FOREIGN KEY(tasklist_id, task_id) 
	        REFERENCES customers(task_id, tasklist_id)
	        ON DELETE CASCADE
    )`;
  pool.query(taskgroup)
    .then((res) => {
      console.log("Created task group succesfully", res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};

pool.on('remove', () => {
  console.log('client removed');
  process.exit(0);
});


