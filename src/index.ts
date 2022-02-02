import express from "express";
import bodyParser from "body-parser";
import tasklistRouter from "./routers/tasklistRouter";

class Server {
  private app;

  constructor() {
    this.app = express();
    this.config();
    this.routerConfig();
  }

  private config() {
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json({ limit: "1mb" })); // 100kb default
  }


  private routerConfig() {
    this.app.get("/tasklist", tasklistRouter);
    this.app.post("/tasklist", tasklistRouter);

    this.app.get(
      "/",
      async (req, res): Promise<any> => {
        res.status(200).send({
          message: "Task APIS!",
        });
      }
    );
  }

  public start = (port: number) => {
    return new Promise((resolve, reject) => {
      this.app
        .listen(port, () => {
          resolve(port);
        })
        .on("error", (err: Object) => reject(err));
    });
  };
}

export default Server;

