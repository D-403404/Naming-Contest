import express from "express";
import apiRouter from "./routes.ts";
import { API_HOST, API_PORT, API_SERVER_URL } from "../public-config.ts";

const server = express();

server.use(express.json());
server.use("/api", apiRouter);

server.listen(parseInt(API_PORT), API_HOST, () => {
  console.info(`API server running on ${API_SERVER_URL}/api`);
});
