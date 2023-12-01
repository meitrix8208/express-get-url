import { IncomingMessage } from "node:http";
// @ts-ignore
import isHTTPS from "is-https";

export const getProtocol = (req: IncomingMessage) => {
  return isHTTPS(req) ? "https" : "http";
};
