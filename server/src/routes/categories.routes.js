import { Router } from "express";
import connectionPrisma from "../database/dbprisma.js"


const router = Router();

router.get('/categories', async (req, res) => {
    const categories = await connectionPrisma.categories.findMany()
    res.json(categories)
})

export default router