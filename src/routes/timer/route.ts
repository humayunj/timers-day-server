import express, { Request, Response } from "express";
import sendAPIResponse from "../../../sendAPIResponse";
import * as TimerFactory from "../../db/Models/Timer/Factory";
let router = express.Router();

router.put("/", async (req, res, next) => {
  let { title } = req.body;
  try {
    let timer = await TimerFactory.create(title);
    sendAPIResponse(res, {
      data: timer,
    });
  } catch (er) {
    sendAPIResponse(res, { error: er });
  }
});
router.post("/:id", async (req, res, next) => {
  const { title } = req.body;
  let doc = await TimerFactory.update(req.params.id, { title });
  sendAPIResponse(res, { data: doc });
});
router.get("/:id", async (req, res, next) => {
  sendAPIResponse(res, {
    data: await (await TimerFactory.find({ _id: req.params.id }))[0],
  });
});
router.get("/", async (req, res, next) => {
  sendAPIResponse(res, { data: { list: await TimerFactory.find() } });
});

router.delete("/:id", async (req, res, next) => {
  let r = await TimerFactory.deleteOne(req.params.id);

  sendAPIResponse(res, { data: { id: req.params.id } });
});

export default router;
