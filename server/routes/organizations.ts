import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const orgRoutes = Router()

import * as orgController from '../controllers/orgController';

// GET "/organizations" route:
// Add Swagger documentation here:

orgRoutes.route("/").get(orgController.getOrganizations);

// GET "organizations/:id" route:
// TODO: fill in Swagger documentation for this route :) 
orgRoutes.route("/:id").get(orgController.getOrganization);
orgRoutes.route("/").post(orgController.createOrganization);

// router.route("/").post([
//     // body('name')
//     //     .isString()
//     //     .isLength({min: 2})
//     //     .withMessage('must be at least 2 chars long')
//     //     .trim(),
//     // body('region')
//     //     .isString()
//     //     .isLength({min: 3})
//     //     .withMessage('must be at least 3 chars long')
//     //     .trim(),
// ],
// validationUtils.validate,
// orgController.createOrganization
// );

// router.route("/:id").put(orgController.updateOrganization);
orgRoutes.route("/:id").delete(orgController.deleteOrganization);
