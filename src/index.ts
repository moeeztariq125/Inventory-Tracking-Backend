import express from 'express';
import {config} from 'dotenv' 
import { appConfig } from './configs';
import InitApp from './loaders/express';

async function init(){
    const app = InitApp(appConfig)
    
}

config()