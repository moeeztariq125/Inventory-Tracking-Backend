import { Express, NextFunction, Request, Response } from "express";
import routers  from "../api/routes";
import middlewares from "../middlewares";

export default (app: Express) => {
  app.use((req: Request, res: Response, next: NextFunction) => {
    console.log(req.originalUrl, " called");
    next();
  });
  app.use(middlewares.requestLogger);
  app.use("/api/users", routers.authRouter.getRouter());
  app.use(middlewares.GlobalErrorHandler)

};
