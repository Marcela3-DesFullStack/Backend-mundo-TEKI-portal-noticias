import connectionPrisma from "../database/dbprisma.js";


const ImagesModel = {

    getAllImages: async () => {
        const images = await connectionPrisma.images.findMany();
        return images;
    },

    getImage: async (id) => {
        const image = await connectionPrisma.images.findUnique({
            
            where: {
                id: parseInt(id) ,
               }, 
        });
        return image;
    },

    addImage: async (data) => {
        const newImage = await connectionPrisma.images.create({
            data:  data
        })
        return newImage
    },

    updateImage: async (id, body) => {
        const updateImage = await connectionPrisma.images.update({
            where: {
                id: parseInt(id) ,
                
               }, 
            data: body
        });
        return updateImage;
    },

    deleteImage: async (id) => {
        const deleteImage = await connectionPrisma.images.delete({
            where: {
                id: parseInt(id) ,
                }, 
        });
        return deleteImage;
    },

};
export default ImagesModel;