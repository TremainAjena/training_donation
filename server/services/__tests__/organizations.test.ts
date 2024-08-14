import * as organizationsService from '../organizationsService'
import { prisma } from '../../utils/prisma'
import { prismaMock } from '../../testUtils/prisma'

jest.mock('@prisma/client');

describe('OrganizationsService', () => {
    describe('getOrganizations', () => {
        it('should return all organizations', async () => {
            const organizations = [{id: 1}]
            prismaMock.organizations = {findMany: jest.fn().mockReturnValueOnce(organizations)}

            const result = await organizationsService.getOrganizations
            expect(prisma.organizations.findMany).toHaveBeenCalledTimes(1)
            expect(result).toEqual(organizations)
        })
    })
})


