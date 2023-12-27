import Express, {json}  from "express";
import { IApp } from "../../configs";

const InitApp = (appConfig:IApp):Express.Express =>{
    const app = Express();
    app.use(json)
    app.listen(appConfig.PORT,()=>{
        console.log(`Listening on port: ${appConfig.PORT}`)
    })
    return app
}

export default InitApp