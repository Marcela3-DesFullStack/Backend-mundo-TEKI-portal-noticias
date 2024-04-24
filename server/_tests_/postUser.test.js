import request from "supertest";
import app from '../src/index.js';

describe('POST /users', () => {
    test ('Should create a new user' , async () => {
        const response = await request(app)
            .post('/users')
            .send({
                username: 'angela',
                email: 'angela@mail.com',
                password: '123'
            });

        expect(response.statusCode).toEqual(201);
        expect(response.body.username).toEqual('angela');
        expect(response.body.email).toEqual('angela@mail.com');
        expect(response.body.password).toEqual('123')

    });
    test ('Should send error message when some required field is empty', async () => {
        const response = await request(app)
            .post('/users')
            .send({
                email: 'angela@mail.com',
                password: '123'
            });
        expect(response.statusCode).toEqual(400);

    });

})