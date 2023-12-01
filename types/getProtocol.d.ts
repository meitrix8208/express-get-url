import { IncomingMessage } from "node:http"
export declare function getProtocol(req: IncomingMessage): "http" | "https"