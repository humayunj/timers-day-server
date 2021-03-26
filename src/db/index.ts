import mongoose from "mongoose";
import Logger from "../utils/Logger";

type MongoInstance = any;

let connection: any = null;

export async function init(): Promise<MongoInstance> {
  if (connection !== null) return Promise.resolve(connection);
  if (!process.env.DATABASE_URI)
    throw new Error("DATABASE_URI enviroment variable is not defined");

  connection = await mongoose.connect(process.env.DATABASE_URI as string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  Logger.info("Connected to database");

  return connection;
}
