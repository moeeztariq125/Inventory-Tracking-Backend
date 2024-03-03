import {NextFunction, Request, RequestHandler, Response, Router} from 'express';
import { logger, loggerEnums } from '../../utils';

export interface IRoute {
    endpoint:string;
    method:'get' | 'put' | 'post' | 'delete' | 'patch' ;
    middlewares:RequestHandler[];
    controller:RequestHandler
}


export default abstract class BaseRouter {
    protected router:Router;

    getRouter(){
        return this.router
    }
    constructor(routes:Router[] | Router){
        console.log('base router constructor')
        this.router = Router()
        console.log(loggerEnums.ServiceEnter)
        this.router.use(this.ServiceEnter)
        this.addRoutes(routes)
    }

    // private addRoutes(routes:IRoute[]){
    //     routes.forEach(route=>{
    //         const {endpoint, method, middlewares, controller} = route;
    //         this.router[method](endpoint, middlewares, controller)
    //     })
    // }
    private addRoutes(routes:Router[] | Router){
        if(Array.isArray(routes)){
            routes.forEach(router=>this.router.use(router))
        }else{
            this.router.use(routes)
        }

    }

    private ServiceEnter(req:Request,res:Response, next:NextFunction){
        logger.info(`
        ${loggerEnums.ServiceEnter}-
        ${req.originalUrl}-
        ${req.method}-
        query:${req.query}-
        body:${req.body}-
        params:${req.params}
        `)
        next()
    }
    private ServiceExit(req:Request, res:Response){
        logger.info(`
        ${loggerEnums.SeviceExit}-
        ${req.originalUrl}-
        ${req.method}-
        data:${res.locals.data}
        `)
        return
    }


    /**
     * Global method to send API responses
     * @param res
     * @param statusCode
     */
    public send (req:Request, res:Response, statusCode:number = 200): void{
        const obj = res.locals.data;

    }
}