import { Express, NextFunction, Request, Response } from "express";
import { authRouter } from "../api/routes";
import { requestLogger } from "../middlewares/requestLogger";

export default (app: Express) => {
  app.use((req: Request, res: Response, next: NextFunction) => {
    console.log(req.originalUrl, " called");
    next();
  });
  app.use(requestLogger);
  app.use("/api/users", authRouter.getRouter());
};
