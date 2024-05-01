import { Request, Response, NextFunction, Send } from "express";
import { AppLogger, loggerEnums } from "../utils/logger";

export function requestLogger(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const originalSend = res.send;
  const originalJson = res.json;

  res.send = function (this: Response, body?: any): Response {
    AppLogger.info(
      `
        ${loggerEnums.ServiceEnter}-${req.originalUrl}-${req.method}`,
      {
        query: req.query,
        body: req.body,
        params: req.params
      }
    );
    return originalSend.call(this, body);
  };

  res.json = function (this: Response, body?: any): Response {
    AppLogger.info(
      `
      ${loggerEnums.ServiceEnter}-${req.originalUrl}-${req.method}`,
      body
    );
    return originalJson.call(this, body);
  };

  next();
}
