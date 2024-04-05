import { Router } from "express";
import { prisma } from "../database/dbprisma.js"

const router = Router();


//Request All posts
router.get('/posts', async (req, res) => {
    const postsAll = await prisma.posts.findMany();
    res.json(postsAll)
})
// Create post
router.post('/posts', async (req, res) => {
    const newPost = await prisma.posts.create({
        data: req.body,
    });
    res.json(newPost)
})

export default router