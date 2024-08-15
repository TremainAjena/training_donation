import { app } from '../../app'
import request from 'supertest'
//import { faker } from '@faker-js/faker'

// import * as userService from '../../services/organizationsService';

describe('/organizations', () => {
    describe('GET /organizations', () => {
      it('should return organizations', async () => {
        await request(app)
          .get('/organizations')
          .expect(200)
      })
    })
  })