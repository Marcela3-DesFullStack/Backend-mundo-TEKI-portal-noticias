import { uploadImage } from '../models/cloudinaryModelloudinaryModel';
import fs from 'fs';

async function uploadImageController(req, res) {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No se ha proporcionado ninguna imagen' });
        }

        // Obtener la extensión del archivo original
        const originalNameParts = req.file.originalname.split('.');
        const extension = originalNameParts[originalNameParts.length - 1];

        // Generar un nombre de archivo único y legible
        const uniqueFileName = `${Date.now()}-${Math.round(Math.random() * 10000)}.${extension}`;

        // Guardar la imagen en la carpeta "uploads" con el nuevo nombre
        const newPath = `uploads/${uniqueFileName}`;
        fs.renameSync(req.file.path, newPath);

        // Luego, subir la imagen a Cloudinary
        const imageUrl = await uploadImage(newPath);

        res.json({ imageUrl });
    } catch (error) {
        console.error('Error en el controlador de subida de imágenes:', error);
        res.status(500).json({ error: 'Error en el controlador de subida de imágenes' });
    }
}

export { uploadImageController };

