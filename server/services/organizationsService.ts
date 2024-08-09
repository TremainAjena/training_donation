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