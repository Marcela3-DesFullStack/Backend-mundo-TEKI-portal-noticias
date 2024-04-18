import cloudinary from '../cloudinary.config';

async function uploadImage(path) {
    const result = await cloudinary.uploader.upload(path);
    return result.secure_url;
}

export { uploadImage };

