import PostsRoutes from '../src/routes/postsRoutes.js';
import request from 'supertest';



describe('GET /posts', () => {

    test('should respond with 200 status code', async () => {
        const response = await request(PostsRoutes).get('/posts').send()
        console.log();
    })
} )

