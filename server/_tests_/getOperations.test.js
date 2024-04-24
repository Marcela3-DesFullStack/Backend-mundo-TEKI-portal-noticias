import request from "supertest";
import app from '../src/index.js';


describe('GET /users', () => {
    test('should return status code 200 when users are called', async () => {
        const response = await request(app).get('/users');
        expect(response.statusCode).toEqual(200);
        expect(response.body).toBeInstanceOf(Array);
    })
});

describe('GET /posts', () => {
    test('should return status code 200 when posts are called', async () => {
        const response = await request(app).get('/posts');
        expect(response.statusCode).toEqual(200);
        expect(response.body).toBeInstanceOf(Array);
    })
});

describe('GET /categories', () => {
    test('should return status code 200 when categories are called', async () => {
        const response = await request(app).get('/categories');
        expect(response.statusCode).toEqual(200);
        expect(response.body).toBeInstanceOf(Array);
    })
});

