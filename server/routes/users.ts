import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const userRoutes = Router()

import * as userController from '../controllers/userController';

// GET "/users" route:
userRoutes.route("/").get(userController.getUsers);

// GET "/users/:id" route:
userRoutes.route("/:id").get(userController.getUser);

// POST "/users" route:
userRoutes.route("/").post(userController.createUser);

// UPDATE "/users/:id" route:
userRoutes.route("/:id").put(userController.updateUser);

// DELETE "/users/:id" route:
userRoutes.route("/:id").delete(userController.deleteUser);
