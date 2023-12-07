import { IncomingMessage } from "node:http";
import { getHost } from "./getHost";
import { getProtocol } from "./getProtocol";

const _location =
  typeof location === "undefined" ? { origin: "", pathname: "/" } : location;

interface Options {
  includePath?: boolean;
}

export const getURL = (req: IncomingMessage, options?: Options): string => {
  if (!req) {
    return _location.origin + (options?.includePath ? _location.pathname : "");
  }
  const protocol = getProtocol(req);
  const host = getHost(req);
  const path = options?.includePath ? req.url : "";

  return encodeURI((protocol + "://" + host + path).replace(/\/$/, ""));
};
