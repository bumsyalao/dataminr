import { expect } from 'chai';
import supertest from 'supertest';
import app from '../src/app';
import { pool } from '../src/dbconfig';

const api = supertest(app);


describe('Task route', async function () {
  await pool.query(`CREATE TABLE IF NOT EXISTS task_test
        (
            id integer NOT NULL DEFAULT nextval('task_id_seq'::regclass),
            title text COLLATE pg_catalog."default" NOT NULL,
            updated_at date,
            CONSTRAINT task_pkey PRIMARY KEY (id)
        )`) // This will copy constraints also

  after('Drop temporary tables', async function () {
    await pool.query('DROP TABLE IF EXISTS task_test')
  })

  describe('/task', function () {
    it('Should create a new task', async function (done) {
      const req = {
        title: 'task 1',
        updated_at: new Date(Date.now())
      }
      api.post('/task')
        .send(req)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body.message).to.equal(`Task created succesfully ID: ${res.body.rows[0]}`);
          done();
        });
    });

    it('Should get all task', async function (done) {
      api.get('/task')
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body.message).to.equal(res.body);
          done();
        });
    });

  });

})