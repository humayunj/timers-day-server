import express from "express";
import timersRouter from "./timer/route";
let router = express.Router();

router.use("/timers", timersRouter);
export default router;
