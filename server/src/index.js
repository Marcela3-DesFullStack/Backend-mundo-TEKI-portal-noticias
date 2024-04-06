import express from "express";
import postsRoutes from './routes/postsRoutes.js'
import categoriesRoutes from './routes/categories.routes.js'


const app = express(); // ejecutar express

app.use(express.json()) // que me ejecute datos con json

app.use ("/", postsRoutes);
app.use ("/", categoriesRoutes);

app.listen(3000)
console.log('Server on port', 3000);
