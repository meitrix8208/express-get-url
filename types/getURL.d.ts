import { IncomingMessage } from "node:http";

interface Options {
  includePath?: boolean;
}
export declare function getURL(req: IncomingMessage, options?: Options): string;
