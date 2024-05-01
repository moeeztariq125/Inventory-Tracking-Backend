import { Request, RequestHandler, Response, Router } from "express";

export interface IRoute {
  endpoint: string;
  method: "get" | "put" | "post" | "delete" | "patch";
  middlewares: RequestHandler[];
  controller: RequestHandler;
}

export default abstract class BaseRouter {
  protected router: Router;

  getRouter() {
    return this.router;
  }
  constructor(routes: Router[] | Router) {
    this.router = Router();
    this.addRoutes(routes);
  }

  private addRoutes(routes: Router[] | Router) {
    if (Array.isArray(routes)) {
      routes.forEach((router) => this.router.use(router));
    } else {
      this.router.use(routes);
    }
  }
}
