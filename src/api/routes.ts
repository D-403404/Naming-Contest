import express from "express";
import { connectClient } from "../server/db.ts";
import cors from "cors";

// import data from "../data/test-data.json" with {type: 'json'};

const router = express.Router();

router.use(cors());

router.get("/contests", async (req, res) => {
  const client = await connectClient();
  const contests = await client
    .collection("contests")
    .find()
    .project({ _id: 0, id: 1, categoryName: 1, contestName: 1 })
    .toArray();
  res.status(200).send(contests);
});

router.get("/contests/:id", async (req, res) => {
  const client = await connectClient();
  const contest = await client
    .collection("contests")
    .findOne({ id: req.params.id });
  res.status(200).send(contest);
});

router.post("/contests", async (req, res) => {
  const client = await connectClient();
  const newContest = req.body;
  await client.collection("contests").insertOne(newContest);
  res.status(201).send(newContest);
});

router.put("/contests/:id", async (req, res) => {
  const client = await connectClient();
  const { newName } = req.body;
  const doc = await client
    .collection<Contest>("contests")
    .findOneAndUpdate(
      { id: req.params.id },
      {
        $push: {
          names: {
            id: newName.toLowerCase().replace(/\s+/g, "-"),
            name: newName,
            timestamp: new Date(),
          },
        },
      },
      { returnDocument: "after" },
    );
  res.status(200).send({ updatedContest: doc });
});

export default router;
