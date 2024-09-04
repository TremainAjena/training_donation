import { Request, Response, NextFunction } from 'express';
import * as usersService from "../services/usersService"

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


// GET /users - find general users
  /**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Returns an array of users.
 */
  export async function getUsers(req: Request, res: Response) {
    const users = await usersService.getUsers()
    // const users = await prisma.users.findMany()
    return res.json(users)
  }

  // app.get('/hello', query('customer').notEmpty(), (req, res) => {
  //   const result = validationResult(req);
  //   if (result.isEmpty()) {
  //     return res.send(`Hello, ${req.query.customer}!`);
  //   }
  
  //   res.send({ errors: result.array() });
  // });
  

  
// GET /users/:id - users show/detail
  /**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get the user by id
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user id
 *     responses:
 *       200:
 *         description: The user response by id
 *         content:
 *           application/json:
 *       404:
 *         description: The user was not found
 */
  export async function getUser(req: Request, res: Response) {
      const { id } = req.params
      const user = await usersService.getUser(Number(id))
      res.json(user)
    }
  

// POST /users - new user entry
  /**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
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
 *                 encrypted_password:
 *                    type: string
 *                    required: true
 *                 zip_code:
 *                    type: string
 *                    required: true
 *     responses:
 *       200:
 *         description: The created user.
 *       500:
 *         description: Some server error
*/
  export async function createUser(req: Request, res: Response) {
      console.log("hello")
      const { name, email, encrypted_password, zip_code } = req.body
      const user = await usersService.createUser(name, email, encrypted_password, zip_code)
      return res.json(user)

    //   console.log(name, email, phone, city, state)
    //  const result = await prisma.users.create({
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
  

// PUT /users/:id - Update user entry
 /**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Update a user
 *     tags: [Users]
 *     parameters:
 *      - name: id
 *        in: path
 *        type: integer
 *        description: The ID of the user.
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
 *              encrypted_password:
 *                 type: string
 *                 required: true
 *              zip_code:
 *                 type: string
 *                 required: true
 *     responses:
 *       200:
 *         description: returns the user object.
 */
  export async function updateUser(req: Request, res: Response) {
      const { id } = req.params
      const { name, email, encrypted_password, zip_code} = req.body
      const result = await prisma.users.update({
          where: { id: Number(id) },
          data: {
            name: name,
            email: email,
            encrypted_password: encrypted_password,
            zip_code: zip_code
          },
        })
      return res.json(result)
    }
    

// DELETE /users/:id - deleting specific user entries
  /**
 * @swagger
 * /users/{id}:
 *    delete:
 *     summary: Remove the user by id
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user id
 *
 *     responses:
 *       200:
 *         description: The user was deleted
 *       404:
 *         description: The user was not found
 */
  export async function deleteUser(req: Request, res: Response) {
      const { id } = req.params
      const result = await prisma.users.delete({ where: { id: Number(id) } })
      res.json(result)
    }

  