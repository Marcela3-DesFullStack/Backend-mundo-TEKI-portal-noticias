import express from "express";
import postsRoutes from './routes/postsRoutes.js'
import categoriesRoutes from './routes/categoriesRoutes.js'
import usersRoutes from './routes/usersRoutes.js'
import commentsRoutes from './routes/commentsRoutes.js'
import imagesRoutes from './routes/imagesRoutes.js'
import cors from 'cors'




const app = express(); // ejecutar express

app.use(express.json()) // que me ejecute datos con json
app.use(cors())

app.use ("/posts", postsRoutes);
app.use ("/categories", categoriesRoutes);
app.use ("/users", usersRoutes);
app.use ("/comments", commentsRoutes);
app.use ("/images", imagesRoutes);
app.use ("/admin", usersRoutes);


app.listen(3000)
console.log('Server on port', 3000);
