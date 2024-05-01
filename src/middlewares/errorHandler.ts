import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import { CustomError } from "../errors/CustomError";
import { AppLogger, loggerEnums } from "../utils/logger";

export const GlobalErrorHandler: ErrorRequestHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!err) next();
  AppLogger.error(
    `${loggerEnums.ServiceError}-${req.originalUrl}-${req.method}`,
    err
  );
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({
      errors: [
        {
          message: err.message
        }
      ]
    });
  }
  return res.json({
    error: {
      message: err.message || "Internal Server Error"
    }
  });
};
