import { Request, Response, NextFunction } from 'express';
import { prisma } from '../utils/prisma'
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';

// Login
   /**
 * @swagger
 * /login:
 *   post:
 *     summary: Create a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *            schema:
 *              type: object
 *              properties:
 *                 email:
 *                    type: string
 *                    required: true
 *                 password:
 *                    type: string
 *                    required: true
 *     responses:
 *       200:
 *         description: The created user.
 *       500:
 *         description: Some server error
*/
export async function loginUser(req: Request, res: Response) {
  console.log(req.body)
    const { email, password } = req.body
    const user = await prisma.users.findFirst({ where: { email: email } })
    if (user){
      const passwordsMatch = await bcrypt.compare(password, user.encrypted_password);
      if (passwordsMatch){
        // const accessToken = "123";
        const accessToken = jwt.sign({ sub: user.id, email: user.email }, `${process.env.SECRET_KEY}`, {
            expiresIn: 604800
        });
        return res.status(200).json({token: accessToken});
      }
      else {
        return res.status(400).json({"response": "Invalid login credentials: Password does not match"});
      }
    }
    else {
      return res.status(400).json({"response": "Invalid login credentials: User not found."});
    }
  
  
//    return res.json(result)
  }