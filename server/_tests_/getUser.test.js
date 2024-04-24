import request from "supertest";
import app from '../src/index.js';

describe('GET /users/:id', () => {
    test ('Should find an user with ID' , async () => {
        const response = await request(app).get(`/users/${id}`);
        expect(response.statusCode).toEqual(200);
        
        
    });
    test ('Should send error message when ID will be no valid', async () => {
        const response = await request(app).get('/users/123');
        expect(response.statusCode).toEqual(500);

    });

})