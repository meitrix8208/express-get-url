import express from "express";
import { getURL, getHost, getProtocol } from "../src";

const app = express();
app.use(express.json());

app.get("/url", (req, res) => {
  res.json({
    protocol: getProtocol(req),
    host: getHost(req),
    url: getURL(req, { includePath: true }),
  });
});

app.listen(3000, () => {
  console.log("Listening on http://localhost:3000/url"); // eslint-disable-line no-console
});
