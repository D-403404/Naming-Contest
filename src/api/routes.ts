import express from "express";
import { connectClient } from "../server/db.ts";

// import data from "../data/test-data.json" with {type: 'json'};

const router = express.Router();

router.get("/contests", async (req, res) => {
  const client = await connectClient();
  const contests = await client
    .collection("contests")
    .find()
    .project({ _id: 0, id: 1, categoryName: 1, contestName: 1 })
    .toArray();
  res.send(contests);
});

router.get("/contests/:id", async (req, res) => {
  const client = await connectClient();
  const contest = await client
    .collection("contests")
    .findOne({ id: req.params.id });
  res.send(contest);
});

export default router;
