import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  // Tests e2e

  it('/users (GET)', () => {
    // First create a User
    const user = { name: 'John Doe', description: 'Developer' };
  
    return request(app.getHttpServer())
      .post('/users/create')
      .send(user)
      .expect(201)
      .then(() => {
        // Next, get a request to /users
        return request(app.getHttpServer())
          .get('/users')
          .expect(200)
          .expect((res) => {
            expect(Array.isArray(res.body)).toBe(true);
            expect(res.body.length).toBeGreaterThan(0);
            expect(res.body[0]).toHaveProperty('id');
            expect(res.body[0]).toHaveProperty('name', user.name);
            expect(res.body[0]).toHaveProperty('description', user.description);
          });
      });
  });
  

  it('/users/:id (GET)', () => {
    // First create a User
    const user = { name: 'John Doe', description: 'Developer' };

    return request(app.getHttpServer())
      .post('/users/create')
      .send(user)
      .expect(201)
      .then((res) => {
        const userId = res.body.id;

        // Next, get a request with ID
        return request(app.getHttpServer())
          .get(`/users/${userId}`)
          .expect(200)
          .expect((res) => {
            expect(res.body).toHaveProperty('id', userId);
            expect(res.body).toHaveProperty('name', user.name);
            expect(res.body).toHaveProperty('description', user.description);
          });
      });
  });

  it('/users/delete/:id (DELETE)', () => {
    // First create a User
    const user = { name: 'John Doe', description: 'Developer' };
  
    return request(app.getHttpServer())
      .post('/users/create')
      .send(user)
      .expect(201)
      .then((res) => {
        const userId = res.body.id;
  
        // Next, make a request to /delete/:id with userID in param
        return request(app.getHttpServer())
          .delete(`/users/delete/${userId}`)
          .expect(200)
          .expect((res) => {
            expect(res.body).toHaveProperty('id', userId);
            expect(res.body).toHaveProperty('name', user.name);
            expect(res.body).toHaveProperty('description', user.description);
          });
      })
  });

  it('/users/create (POST)', () => {
    // First create a User
    const user = { name: 'John Doe', description: 'Developer' };

    return request(app.getHttpServer())
      .post('/users/create')
      .send(user)
      .expect(201)
      .expect((res) => {
        expect(res.body).toHaveProperty('name', user.name);
        expect(res.body).toHaveProperty('description', user.description);
      });
  });

  it('/users/edit/:id (PATCH)', () => {
    // First create a User
    const user = { name: 'John Doe', description: 'Developer' };

    return request(app.getHttpServer())
      .post('/users/create')
      .send(user)
      .expect(201)
      .then((res) => {
        const userId = res.body.id;

        // Next, make a request to /delete/:id with userID in param and body contains new data
        const updatedUser = { name: 'Jane Doe', description: 'Designer' };

        return request(app.getHttpServer())
          .patch(`/users/edit/${userId}`)
          .send(updatedUser)
          .expect(200)
          .expect((res) => {
            expect(res.body).toHaveProperty('id', userId);
            expect(res.body).toHaveProperty('name', updatedUser.name);
            expect(res.body).toHaveProperty('description', updatedUser.description);
          });
      });
  });

});
