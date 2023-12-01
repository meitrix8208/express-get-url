import { IncomingMessage } from "node:http";
import { getHost } from "./getHost";
import { getProtocol } from "./getProtocol";

const _location =
  typeof location === "undefined" ? { origin: "", pathname: "/" } : location;
export const getURL = (req: IncomingMessage, includePath?: boolean): string => {
  if (!req) {
    return _location.origin + (includePath ? _location.pathname : "");
  }
  const protocol = getProtocol(req);
  const host = getHost(req);
  const path = includePath ? req.url : "";

  return encodeURI((protocol + "://" + host + path).replace(/\/$/, ""));
};
