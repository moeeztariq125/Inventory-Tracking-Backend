import { Request, Response, NextFunction, Send } from "express";
import { AppLogger, loggerEnums } from "../utils/logger";

export function requestLogger(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const originalSend = res.send;
  AppLogger.info(
    `
      ${loggerEnums.ServiceEnter}-${req.originalUrl}-${req.method}`,
    {
      query: req.query,
      body: req.body,
      params: req.params
    }
  );

  res.send = function (this: Response, body?: any): Response {
    AppLogger.info(
      `
      ${loggerEnums.ServiceExit}-${req.originalUrl}-${req.method}`,
      body
    );
    return originalSend.call(this, body);
  };

  next();
}
