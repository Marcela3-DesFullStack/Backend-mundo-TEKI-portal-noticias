import express from "express";
const app = express(); // ejecutar express

app.use(express.json()) // que me ejecute datos con json

app.listen(3000)
console.log('Server on port', 3000);
