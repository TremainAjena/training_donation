import { Request, Response, NextFunction } from 'express';
import * as eventsService from "../services/eventsService"

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


// GET /events - find general events
  /**
 * @swagger
 * /events:
 *   get:
 *     summary: Get all events
 *     tags: [Events]
 *     responses:
 *       200:
 *         description: Returns an array of events.
 */
  export async function getEvents(req: Request, res: Response) {
    const events = await eventsService.getEvents()
    // const events = await prisma.events.findMany()
    return res.json(events)
  }
  

  
// GET /events/:id - events show/detail
  /**
 * @swagger
 * /events/{id}:
 *   get:
 *     summary: Get the event by id
 *     tags: [Events]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The event id
 *       - in: path
 *         name: organization_id
 *         schema:
 *           type: string
 *         required: false
 *         description: The associated organization id
 *     responses:
 *       200:
 *         description: The event response by id
 *         content:
 *           application/json:
 *       404:
 *         description: The event was not found
 */
  export async function getEvent(req: Request, res: Response) {
      const { id } = req.params
      const event = await eventsService.getEvent(Number(id))
      res.json(event)
    }
  

// POST /events - new event entry
  /**
 * @swagger
 * /events:
 *   post:
 *     summary: Create a new event
 *     tags: [Events]
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
 *                 start_date:
 *                    type: dateTime
 *                    required: true
 *                 end_date:
 *                    type: dateTime
 *                    required: true
 *                 location:
 *                    type: string
 *                    required: true
 *                 organization_id:
 *                    type: integer
 *                    required: true
 *     responses:
 *       200:
 *         description: The created event.
 *       500:
 *         description: Some server error
*/
  export async function createEvent(req: Request, res: Response) {
      console.log("hello")
      const { name, start_date, end_date, location, organization_id } = req.body
      const event = await eventsService.createEvent(name, start_date, end_date, location, organization_id)
      return res.json(event)

   }
  

// PUT /events/:id - Update event entry
 /**
 * @swagger
 * /events/{id}:
 *   put:
 *     summary: Update a event
 *     tags: [Events]
 *     parameters:
 *      - name: id
 *        in: path
 *        type: integer
 *        description: The ID of the event.
 *     requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *               name:
 *                  type: string
 *                  required: true
 *               start_date:
 *                  type: dateTime
 *                  required: true
 *               end_date:
 *                  type: dateTime
 *                  required: true
 *               location:
 *                  type: string
 *                  required: true
 *               organization_id:
 *                  type: integer
 *                  required: true
 *     responses:
 *       200:
 *         description: returns the event object.
 */
  export async function updateEvent(req: Request, res: Response) {
      const { id } = req.params
      const { name, start_date, end_date, location, organization_id} = req.body
      const result = await prisma.events.update({
          where: { id: Number(id) },
          data: {
            name: name,
            start_date: start_date,
            end_date: end_date,
            location: location,
            organization_id: organization_id
          },
        })
      return res.json(result)
    }
    

// DELETE /events/:id - deleting specific event entries
  /**
 * @swagger
 * /events/{id}:
 *    delete:
 *     summary: Remove the event by id
 *     tags: [Events]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The event id
 *
 *     responses:
 *       200:
 *         description: The event was deleted
 *       404:
 *         description: The event was not found
 */
  export async function deleteEvent(req: Request, res: Response) {
      const { id } = req.params
      const result = await prisma.events.delete({ where: { id: Number(id) } })
      res.json(result)
    }

  