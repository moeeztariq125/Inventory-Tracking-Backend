import { Express, NextFunction, Request, Response } from "express";
import { authRouter } from "../api/routes";

export default (app: Express) => {
  app.use((req: Request, res: Response, next: NextFunction) => {
    console.log(req.originalUrl, " called");
    next();
  });
  app.use("/api/users", authRouter.getRouter());
};
