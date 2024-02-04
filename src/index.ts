import {config} from 'dotenv'
config()
import {expressApp} from "./loaders"


function init(){
    const app = expressApp()
}

init()