import connectionPrisma from "../database/dbprisma.js";


const CategoriesModel = {

    getAllCategories: async () => {
        const categories = await connectionPrisma.categories.findMany();
        return categories;
    },

    getCategory: async (id) => {
        const category = await connectionPrisma.categories.findUnique({
            
            where: {
                id: parseInt(id) ,
               }, 
        });
        return category;
    },

    addCategory: async (data) => {
        const newCategory = await connectionPrisma.categories.create({
            data:  data
        })
        return newCategory
    },

    updateCategory: async (id, body) => {
        const updateCategory = await connectionPrisma.categories.update({
            where: {
                id: parseInt(id) ,
                
               }, 
            data: body
        });
        return updateCategory;
    },

    deleteCategory: async (id) => {
        const deleteCategory = await connectionPrisma.categories.delete({
            where: {
                id: parseInt(id) ,
                }, 
        });
        return deleteCategory;
    },

};
export default CategoriesModel;