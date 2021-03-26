import * as dotenv from "dotenv";
import * as db from "./db";
import Timer from "./db/Models/Timer/Model";
import * as server from "./http/server";
import express, { Request } from "express";
import Logger, { httpLogger } from "./utils/Logger";
import routes from "./routes/routes";
import path from "path";

dotenv.config();

async function appInit(...args: any) {
  try {
    await db.init();
  } catch (er) {
    Logger.fatal(er);
    process.exit(1);
  }

  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(httpLogger);
  app.use(express.static(path.join(__dirname, "../../public")));
  app.use("/api", routes);

  app.get("(/*)?", async (req, res, next) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
  });

  app.use((err: any, req: any, res: any, next: (arg0: any) => void) => {
    req.log.info("ERRROR");

    if (err) next(err);
  });
  try {
    server.start(app);
  } catch (er) {
    Logger.fatal(er);
    process.exit(1);
  }
}

appInit();
