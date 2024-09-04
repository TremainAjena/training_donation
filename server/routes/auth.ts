import * as authController from "../controllers/authController"
import { Router, Request, Response } from 'express';

export const authRoutes = Router()
authRoutes.route('/').post(authController.loginUser);