import express from "express";
import cors from "cors";
import postsRoutes from './routes/postsRoutes.js'
import categoriesRoutes from './routes/categoriesRoutes.js'
import usersRoutes from './routes/usersRoutes.js'
import commentsRoutes from './routes/commentsRoutes.js'
import imagesRoutes from './routes/imagesRoutes.js'



const app = express(); // ejecutar express

app.use(express.json()) // que me ejecute datos con json

app.use ("/posts", postsRoutes);
app.use ("/categories", categoriesRoutes);
app.use ("/users", usersRoutes);
app.use ("/comments", commentsRoutes);
app.use ("/images", imagesRoutes);



app.listen(3000)
console.log('Server on port', 3000);
