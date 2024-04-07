import connectionPrisma from "../database/dbprisma.js";


const CategoriesModel = {

    getAllCategories: async () => {
        const categories = await connectionPrisma.categories.findMany();
        return categories
    },

    getCategory: async (id) => {
        const category = await connectionPrisma.categories.findUnique({
            
            where: {
                id: parseInt(id) ,
               }, 
        });
        return category;
    },

    addCategory: async (body) => {
        body.created_at = new Date(); 
        const newCategory = await connectionPrisma.categories.create({
            data:  body
        })
        return newCategory
    },

    updateCategory: async (id, body) => {
        body.created_at = new Date();
        const updateCategory = await connectionPrisma.categories.update({
            where: {
                id: parseInt(id) ,
                
               }, 
            data: body
        });
        return updateCategory;
    },

    deleteCatgory: async (id) => {
        const deleteCategory = await connectionPrisma.categories.delete({
            where: {
                id: parseInt(id) ,
                }, 
        });
        return deleteCategory;
    },

};
export default CategoriesModel;