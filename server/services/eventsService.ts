import { Result } from "@prisma/client/runtime/library"

import { prisma } from '../utils/prisma'


export async function getEvents() {
    return await prisma.events.findMany()
}

// The id names on the right are made up variable names; the left is the actual field from the database table
export async function getEvent(eventId: number) {
    return await prisma.events.findUnique({
        where: {
            id: eventId
        }
    })
}

export async function createEvent(name: string, start_date: string, end_date: string, location: string, organization_id: number) {
   return await prisma.events.create({
     data: {
       name: name,
       start_date: start_date,
       end_date: end_date,
       location: location,
       organization_id: organization_id
     },
   })
 }

export async function updateEvent(name: string, start_date: string, end_date: string, location: string, organization_id: number) {
 return await prisma.events.update({
      where: { id: Number() },
      data: {
        name: name,
        start_date: start_date,
        end_date: end_date,
        location: location,
        organization_id: organization_id
      },
    })
}

 export async function deleteEvent() {
    return await prisma.events.delete({ where: { id: Number() } })
  }