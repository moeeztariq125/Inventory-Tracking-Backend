import { isNumberObject } from "util/types";

export interface IApp {
    PORT: number;
}

const getAppConfig = ():IApp => {
    const PORT = process.env.PORT;
    if(!PORT || !isNumberObject(PORT)){
        throw new Error('PORT not available')
    }
    return {
        PORT: Number(PORT)
    }
}

const appConfig = getAppConfig()
export default appConfig