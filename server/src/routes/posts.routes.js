import { Router } from "express";
import { prisma } from "../database/dbprisma.js"

const router = Router();

//Request All posts
router.get('/posts', async (req, res) => {
    const postsAll = await prisma.posts.findMany();
    res.json(postsAll)
});
// Unique post
router.get('/posts/:id', async (req, res) => {
    const postFound = await prisma.posts.findFirst({
        where: {
            id : parseInt(req.params.id),  // Se utiliza parseint porque es un entero no un string
        },
    });

    if (!postFound) 
    return res.status(404).json({ error: "Post not Found"});

    return res.json(postFound)
});

// Create post
router.post('/posts', async (req, res) => {
    const newPost = await prisma.posts.create({
        data: req.body,
    });
    res.json(newPost)
});
//Update post
router.put('/posts/:id', async (req, res) => {
    const postUpdate = await prisma.posts.update({
        where: {
            id : parseInt(req.params.id),  // Se utiliza parseint porque es un entero no un string
        },
        data: req.body // lo que estoy actualizando
    })
    return res.json(postUpdate)
});


// Delete post
router.delete('/posts/:id', async (req, res) => {
    const postDeleted = await prisma.posts.delete ({
        where: {
            id : parseInt(req.params.id),  // Se utiliza parseint porque es un entero no un string
        },
    });

    if (!postDeleted) 
    return res.status(404).json({ error: "Post not Found"});

    return res.json(postDeleted)
});

export default router