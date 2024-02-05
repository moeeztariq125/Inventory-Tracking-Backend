import {Router} from 'express'
import authValidator from '../../validations/Auth.validators'
import { controllers } from '../../../loaders'


const authRouter = Router()

authRouter
.post('/check',authValidator.check,controllers.userController.check)
.post('/sign-up',authValidator.signUp,controllers.userController.signUp)