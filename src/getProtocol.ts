import { IncomingMessage } from "node:http";
import { isHTTPS } from "express-get-is-https";

export const getProtocol = (req: IncomingMessage) => {
  return isHTTPS(req) ? "https" : "http";
};
