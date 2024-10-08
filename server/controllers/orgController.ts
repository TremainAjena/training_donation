import { Request, Response, NextFunction } from 'express';
import * as organizationsService from "../services/organizationsService"

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


// GET /organizations - find general organizations
  /**
 * @swagger
 * /organizations:
 *   get:
 *     summary: Get all organizations
 *     tags: [Organizations]
 *     responses:
 *       200:
 *         description: Returns an array of organizations.
 */
  export async function getOrganizations(req: Request, res: Response) {
    const organizations = await organizationsService.getOrganizations()
    // const organizations = await prisma.organizations.findMany()
    return res.json(organizations)
  }

  // app.get('/hello', query('customer').notEmpty(), (req, res) => {
  //   const result = validationResult(req);
  //   if (result.isEmpty()) {
  //     return res.send(`Hello, ${req.query.customer}!`);
  //   }
  
  //   res.send({ errors: result.array() });
  // });
  

  
// GET /organizations/:id - organizations show/detail
  /**
 * @swagger
 * /organizations/{id}:
 *   get:
 *     summary: Get the organization by id
 *     tags: [Organizations]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The organization id
 *     responses:
 *       200:
 *         description: The organization response by id
 *         content:
 *           application/json:
 *       404:
 *         description: The organization was not found
 */
  export async function getOrganization(req: Request, res: Response) {
      const { id } = req.params
      const organization = await organizationsService.getOrganization(Number(id))
      res.json(organization)
    }
  

// POST /organizations - new organization entry
  /**
 * @swagger
 * /organizations:
 *   post:
 *     summary: Create a new organization
 *     tags: [Organizations]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *            schema:
 *              type: object
 *              properties:
 *                 name:
 *                    type: string
 *                    required: true
 *                 email:
 *                    type: string
 *                    required: true
 *                 phone:
 *                    type: string
 *                    required: true
 *                 city:
 *                    type: string
 *                    required: true
 *                 state:
 *                    type: string
 *                    required: true
 *                 events:
 *                    type: string
 *                    required: true
 *     responses:
 *       200:
 *         description: The created organization.
 *       500:
 *         description: Some server error
*/
  export async function createOrganization(req: Request, res: Response) {
      console.log("hello")
      const { name, email, phone, city, state } = req.body
      const organization = await organizationsService.createOrganization(name, email, phone, city, state)
      return res.json(organization)

    //   console.log(name, email, phone, city, state)
    //  const result = await prisma.organizations.create({
    //    data: {
    //      name: name,
    //      email: email,
    //      phone: phone,
    //      city: city,
    //      state: state,
    //    },
    //  })
    //  res.json(result)
   }
  

// PUT /organizations/:id - Update organization entry
 /**
 * @swagger
 * /organizations/{id}:
 *   put:
 *     summary: Update an organization
 *     tags: [Organizations]
 *     parameters:
 *      - name: id
 *        in: path
 *        type: integer
 *        description: The ID of the organization.
 *     requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                 type: string
 *                 required: true
 *              email:
 *                 type: string
 *                 required: true
 *              phone:
 *                 type: string
 *                 required: true
 *              city:
 *                 type: string
 *                 required: true
 *              state:
 *                 type: string
 *                 required: true
 *              events:
 *                 type: string
 *                 required: true
 *     responses:
 *       200:
 *         description: returns the user object.
 */
  export async function updateOrganization(req: Request, res: Response) {
      const { id } = req.params
      const { name, email, phone, city, state } = req.body
      const result = await prisma.organizations.update({
          where: { id: Number(id) },
          data: {
            name: name,
            email: email,
            phone: phone,
            city: city,
            state: state,
          },
        })
      return res.json(result)
    }
    

// DELETE /organizations/:id - deleting specific organization entries
  /**
 * @swagger
 * /organizations/{id}:
 *    delete:
 *     summary: Remove the organization by id
 *     tags: [Organizations]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The organization id
 *
 *     responses:
 *       200:
 *         description: The organization was deleted
 *       404:
 *         description: The organization was not found
 */
  export async function deleteOrganization(req: Request, res: Response) {
      const { id } = req.params
      const result = await prisma.organizations.delete({ where: { id: Number(id) } })
      res.json(result)
    }

    export async function getEventsForOrganization(req: Request, res: Response) {
      const { id } = req.params
      const events = await organizationsService.getEventsForOrganization(Number(id))
      res.json(events)
    }