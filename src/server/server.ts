import express from "express";
import { HOST, PORT, SERVER_URL } from "../config.ts";
import { createProxyMiddleware } from "http-proxy-middleware";
import { API_SERVER_URL } from "../public-config.ts";
import serverRender from "./render.tsx";

const server = express();

server.set("view engine", "ejs");

server.use(express.static("dist"));

server.use(
  "/api",
  createProxyMiddleware({
    target: `${API_SERVER_URL}/api`,
    changeOrigin: true,
  }),
);

server.use("/", async (req, res) => {
  const { initialMarkup, initialData } = await serverRender();
  res.render("index", {
    initialMarkup: initialMarkup,
    initialData: initialData,
  });
});

server.listen(parseInt(PORT), HOST, () => {
  console.info(`Server running on ${SERVER_URL}`);
});
