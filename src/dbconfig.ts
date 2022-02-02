import { Pool } from "pg";

export const pool = new Pool({
  max: 20,
  idleTimeoutMillis: 30000,
});



pool.connect(function (err, client, done) {
  if (err) throw new Error(err as any);
  console.log("Connected");
});

const createTables = () => {
  const task = `CREATE TABLE IF NOT EXISTS
      task(
        id SERIAL PRIMARY KEY,
        title VARCHAR(128) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )`;
  pool.query(task)
    .then((res) => {
      console.log(res);
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
  pool.query(task)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};