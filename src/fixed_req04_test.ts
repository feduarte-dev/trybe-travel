// import request from 'supertest';
// import { Sequelize } from 'sequelize' ;
// import app from '../src/app';
// import { initSequelize, termSequelize } from './config/sequelize';
// import sinon from 'sinon'
// import UserModel from '../src/database/models/User.model';

// let database: Sequelize;

// const validUser = {
//   "email": "user1@email.com",
//   "password": "chang3m3"
// }

// beforeAll(async () => {
//   database = await initSequelize();
// });

// afterAll(async () => termSequelize(database));

// describe('04 - Crie um endpoint que remova um pacote de viagem, a partir de seu id.', () => {
//   beforeEach(function () {
//     sinon.restore();
//   });

//   it('Será validado que é possível remover um pacote que existe', async () => {
//     const mockedUser = UserModel.build(validUser);
//     sinon.stub(UserModel, 'findOne').resolves(mockedUser);

//     const {
//       body,
//       statusCode,
//     } = await request(app).delete('/packages/1').set({
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXIxQGVtYWlsLmNvbSIsImlhdCI6MTcwNTUyMzQzOX0.uSDD6q2dV78uRiVB1jNjFMAX8-SNcc-KZInIFyHS7gk',
//     });

//     expect(statusCode).toEqual(204);
//     expect(body).toEqual({});

//     const result = await database.query('SELECT id, destination, category, price from packages where id=1', { type: 'SELECT' });
    
//     expect(result).toEqual([]);
//   });

//   it("Será validado que não é possível remover um pacote que não existe", async () => {
//     const mockedUser = UserModel.build(validUser);
//     sinon.stub(UserModel, 'findOne').resolves(mockedUser);

//     const {
//       body,
//       statusCode,
//     } = await request(app).delete('/packages/100').set({
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXIxQGVtYWlsLmNvbSIsImlhdCI6MTcwNTUyMzQzOX0.uSDD6q2dV78uRiVB1jNjFMAX8-SNcc-KZInIFyHS7gk',
//     });
    
//     expect(statusCode).toBe(404);
//     expect(body.message).toEqual("Pacote não encontrado!");
    
//     const [result] = await database.query('SELECT id, destination, category, price from packages where id=100', { type: 'SELECT' });

//     expect(result).toEqual(undefined);
//   });
// });
