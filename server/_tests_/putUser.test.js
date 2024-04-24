import request from "supertest";
import app from '../src/index.js';

describe('PUT /users/:id', () => {
    test ('Should update an existing user' , async () => {
        const response = await request(app)
            .put(`/users/${id}`)
            .send({
                username: 'angela',
                email: 'angela1@mail.com',
                password: '123'
            });

        expect(response.statusCode).toEqual(201);
        expect(response.body.email).toEqual('angela1@mail.com');
        
    });
    test ('Should send error message when ID will be no valid', async () => {
        const response = await request(app)
            .post('/users/1234')
            .send({
                username: 'angela',
                email: 'angela1@mail.com',
                password: '123'
            });
        expect(response.statusCode).toEqual(500);

    });

})