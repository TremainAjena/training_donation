import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const eventRoutes = Router()

import * as eventController from '../controllers/eventController';

// GET "/events" route:
eventRoutes.route("/").get(eventController.getEvents);

// GET "/events/:id" route:
eventRoutes.route("/:id").get(eventController.getEvent);

// POST "/events" route:
eventRoutes.route("/").post(eventController.createEvent);

// UPDATE "/events/:id" route:
eventRoutes.route("/:id").put(eventController.updateEvent);

// DELETE "/events/:id" route:
eventRoutes.route("/:id").delete(eventController.deleteEvent);