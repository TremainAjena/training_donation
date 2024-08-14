import { Result } from "@prisma/client/runtime/library"

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


export async function getOrganizations() {
    return await prisma.organizations.findMany()
}

// The id names on the right are made up variable names; the left is the actual field from the database table
export async function getOrganization(organizationId: number) {
    return await prisma.organizations.findUnique({
        where: {
            id: organizationId
        }
    })
}

export async function createOrganization(name: string, email: string, phone: string, city: string, state: string) {
   return await prisma.organizations.create({
     data: {
       name: name,
       email: email,
       phone: phone,
       city: city,
       state: state,
     },
   })
 }

 async function updateOrganization(name: string, email: string, phone: string, city: string, state: string) {
  // const { id } = req.params
  // const { name, region, roast } = req.body
 return await prisma.organizations.update({
      where: { id: Number() },
      data: {
        name: name,
        email: email,
        phone: phone,
        city: city,
        state: state,
      },
    })
}

 export async function deleteOrganization() {
    return await prisma.organizations.delete({ where: { id: Number() } })
  }