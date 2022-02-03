/* tslint:disable */
import { Pool } from 'pg';
require('make-runnable');
require('dotenv').config();



const PG_DATABASE = process.env.NODE_ENV === "test"
  ? process.env.TEST_DATABASE
  : process.env.DEV_DATABASE


export const pool = new Pool({
  max: 20,
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: PG_DATABASE,
  port: 5432,
  password: process.env.PGPASS,
  idleTimeoutMillis: 30000
});


pool.connect(function (err, client, done) {
  if (err) throw new Error(err as any);
  console.log("Connected");
});

