import { Result } from "@prisma/client/runtime/library"

import { prisma } from '../utils/prisma'
import * as bcrypt from 'bcryptjs';


export async function getUsers() {
    return await prisma.users.findMany()
}

// The id names on the right are made up variable names; the left is the actual field from the database table
export async function getUser(userId: number) {
    return await prisma.users.findUnique({
        where: {
            id: userId
        }
    })
}

export async function createUser(name: string, email: string, password: string, zip_code: string) {
   const hashedPassword = await bcrypt.hash(password, 10)
  return await prisma.users.create({
     data: {
       name: name,
       email: email,
       encrypted_password: hashedPassword,
       zip_code: zip_code
     },
   })
 }

export async function updateUser(name: string, email: string, encrypted_password: string, zip_code: string) {
 return await prisma.users.update({
      where: { id: Number() },
      data: {
        name: name,
        email: email,
        encrypted_password: encrypted_password,
        zip_code: zip_code
      },
    })
}

 export async function deleteUser() {
    return await prisma.users.delete({ where: { id: Number() } })
  }