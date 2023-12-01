import { IncomingMessage } from "node:http";

export const getHost = (req: IncomingMessage) => {
  return req.headers["x-forwarded-host"] || req.headers.host;
};
