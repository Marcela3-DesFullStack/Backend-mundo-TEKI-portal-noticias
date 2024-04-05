import { Router } from "express";
import { prisma } from "../database/dbprisma.js"


const router = Router();

router.get('/categories', async (req, res) => {
    const categoriesAll = await prisma.categories.findMany()
    res.json(categoriesAll)
})

export default router