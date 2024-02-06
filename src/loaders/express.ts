import express, {Express} from 'express'
import { appConfig } from '../config'
export default ():Express => {
    try{
        const app = express()
        app.listen(appConfig.PORT,()=>{
            console.log(`Server listening on PORT: ${appConfig.PORT}`)
        })
        return app
    }
    catch(err:any){
        console.error(err.message)
        process.exit(1)
    }

}