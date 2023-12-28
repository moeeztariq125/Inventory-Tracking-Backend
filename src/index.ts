import express from 'express';
import {config} from 'dotenv' 
import { appConfig } from './configs';
import InitApp from './loaders/express';
import { addRoutes } from './loaders/routes';

async function init(){
    config()
    const app = InitApp(appConfig)
    addRoutes(app)
}


init()