// import request from 'supertest';
// import { Sequelize } from 'sequelize' ;
// import app from '../src/app';
// import { initSequelize, termSequelize } from './config/sequelize';
// import UserModel from '../src/database/models/User.model';
// import sinon from 'sinon'

// let database: Sequelize;

// const validUser = {
//   "email": "user1@email.com",
//   "password": "chang3m3"
// }

// beforeAll(async () => {
//   database = await initSequelize();
// });

// afterAll(async () => termSequelize(database));

// describe('03 - Crie um endpoint que atualize os dados de um pacote de viagem.', () => {
//   beforeEach(function () {
//     sinon.restore();
//   });
  
//   it('Será validado que é possível alterar um pacote que existe', async () => {
//     const mockedUser = UserModel.build(validUser);
//     sinon.stub(UserModel, 'findOne').resolves(mockedUser);

//     const {
//       body,
//       statusCode,
//     } = await request(app).patch('/packages/1')
//     .set({
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXIxQGVtYWlsLmNvbSIsImlhdCI6MTcwNTUyMzQzOX0.uSDD6q2dV78uRiVB1jNjFMAX8-SNcc-KZInIFyHS7gk',
//     })
//     .send({
//       destination: 'Natal',
//       category: 'premium',
//       price: 900.0
//     });

//     expect(statusCode).toEqual(200);
//     expect(body).toEqual({
//       id: 1,
//       destination: 'Natal',
//       category: 'premium',
//       price: 900.0
//     }
// );

//     const [result] = await database.query('SELECT id, destination, category, price from packages where id=1', { type: 'SELECT' });
    
//     expect(result).toEqual({
//       id: 1,
//       destination: 'Natal',
//       category: 'premium',
//       price: 900.0
//     });
//   });

//   it("Será validado que não é possível alterar um pacote que não existe", async () => {
//     const mockedUser = UserModel.build(validUser);
//     sinon.stub(UserModel, 'findOne').resolves(mockedUser);

//     const {
//       body,
//       statusCode,
//     } = await request(app).patch('/packages/100')
//     .set({
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXIxQGVtYWlsLmNvbSIsImlhdCI6MTcwNTUyMzQzOX0.uSDD6q2dV78uRiVB1jNjFMAX8-SNcc-KZInIFyHS7gk',
//     })
//     .send({
//       destination: 'Natal',
//       category: 'premium',
//       price: 900.0
//     });
    
//     expect(statusCode).toBe(404);
//     expect(body.message).toEqual("Pacote não encontrado!");
    
//     const [result] = await database.query('SELECT id, destination, category, price from packages where id=100', { type: 'SELECT' });

//     expect(result).toEqual(undefined);
//   });
// });
