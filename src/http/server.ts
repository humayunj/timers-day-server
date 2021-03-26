import express, { Express } from "express";
import cors from "cors";
import helmet from "helmet";
import Logger from "../utils/Logger";

export function start(app: Express) {
  if (process.env.PORT === undefined || process.env.PORT === null) {
    throw new Error("Port is not defined");
  }

  const port: number = parseInt(process.env.PORT as string, 10);

  app.listen(port, () => {
    Logger.info("HTTP server listening on port " + port);
  });
}
