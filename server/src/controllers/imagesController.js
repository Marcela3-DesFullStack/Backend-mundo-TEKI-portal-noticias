import ImagesModel from "../models/imagesModel.js";

const ImagesController = {

    getAllImages: async ( req , res ) => {
        try {
            const images = await ImagesModel.getAllImages();
            res.json(images);

        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Server Internal Error ' });
        }
    },

    getImage: async (req, res) => {
        try {
            const { id } = req.params;
            const image = await ImagesModel.getImage(id);
            if (image) {
                res.json(image);
            } else {
                res.status(404).json({ message: 'Image not found' });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Server Internal Error ' });
        }
    },

    addImage: async (req, res) => {
        try {
            const { image_url, name } = req.body;
                if ( !image_url || !name) {
                    res.status(400).json({ message: 'Please enter all image`s information ' });
                    return;
                  
                } 
                await ImagesModel.addImage( req.body );
                res.status(201).json({ message: 'Image created succeeded' });
                return;
                    
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'It was not possible add image' });
        }
    },

    updateImage : async (req, res) => {
        try {
            const { id } = req.params;
            const { image_url, name } = req.body;
                if ( !image_url || !name) {
                    res.status(400).json({ message: 'Please enter all image`s information' });
                    return;
                  
                } 
                await ImagesModel.updateImage( id, req.body );
                res.status(201).json({ message: 'Image up to date' });
                return;
                    
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'It was not possible updating image' });
        }
    },

    deleteImage : async (req, res) => {
        try {
            const { id } = req.params;
            const deleteImage = await ImagesModel.deleteImage(id);
                res.status(404).json({ message: 'Image deleted' });
            }
        catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Error to try deleting image' });
        }
    },

}
export default ImagesController;