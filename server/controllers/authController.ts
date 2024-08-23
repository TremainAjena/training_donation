import { Result } from "@prisma/client/runtime/library";

const express = require('express')
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const bcrypt = require('bcrypt')

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
export async function loginUser(req, res) {
    const { email, encrypted_password } = req.body
    const user = await prisma.users.findFirst({ where: { email: email } })
    if (user){
      const passwordsMatch = await bcrypt.compare(encrypted_password, user.encrypted_password);
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