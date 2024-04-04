import express from "express";
import postsRoutes from './routes/posts.routes.js'
import categoriesRoutes from './routes/categories.routes.js'


const app = express(); // ejecutar express

app.use(express.json()) // que me ejecute datos con json

app.use ("/api", postsRoutes);
app.use ("/api", categoriesRoutes);

app.listen(3000)
console.log('Server on port', 3000);
