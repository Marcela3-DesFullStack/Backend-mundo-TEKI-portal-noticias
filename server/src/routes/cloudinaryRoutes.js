const { Router } = require('express');
const { uploadImageController } = require('../controllers/cloudynaryController');
const multer = require('multer');

const CloudinaryRouter = Router();
const upload = multer();

CloudinaryRouter.post('/upload', upload.single('image'), uploadImageController);

module.exports = CloudinaryRouter;
