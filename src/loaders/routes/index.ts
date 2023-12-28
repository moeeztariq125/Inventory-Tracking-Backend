import Express from "express";
import { usersCRUDSRouter } from "../../api/routes";
export const addRoutes = (app:Express.Express):void=>{
    app.use('/api/users',usersCRUDSRouter)
}