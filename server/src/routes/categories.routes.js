import { Router } from "express";
import { prisma } from "../database/dbprisma.js"


const router = Router();

router.get('/categories', async (req, res) => {
    const categories = await prisma.categories.findMany()
    res.json(categories)
})

export default router