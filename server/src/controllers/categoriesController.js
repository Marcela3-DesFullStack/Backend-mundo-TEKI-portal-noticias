import CategoriesModel from "../models/categoriesModel.js";

const CategoriesController = {

    getAllCategories: async ( req , res ) => {
        try {
            const categories = await CategoriesModel.getAllCategories();
            res.json(categories);

        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Server Internal Error ' });
        }
    },

    getCategory : async (req, res) => {
        try {
            const { id } = req.params;
            const category= await CategoriesModel.getCategory(id);
            if (category) {
                res.json(category);
            } else {
                res.status(404).json({ message: 'Category not found' });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Server Internal Error ' });
        }
    },

    addCategory : async (req, res) => {
        try {
            const { name } = req.body;
                if ( !name) {
                    res.status(400).json({ message: 'Please enter category`s name' });
                    return;
                  
                } 
                await CategoriesModel.addCategory( {name });
                res.status(201).json({ message: 'Category created succeeded' });
                return;
                    
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'It was not possible add category' });
        }
    },

    updateCategory : async (req, res) => {
        try {
            const { id } = req.params;
            const { name } = req.body;
                if ( !name) {
                    res.status(400).json({ message: 'Please enter category`s name' });
                    return;
                  
                } 
                await CategoriesModel.updateCategory( id, req.body );
                res.status(201).json({ message: 'Category up to date' });
                return;
                    
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'It was not possible updating category' });
        }
    },
    deleteCategory : async (req, res) => {
        try {
            const { id } = req.params;
            const deleteCategory = await CategoriesModel.deleteCategory(id);
                res.status(404).json({ message: 'Category deleted' });
            }
        catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Error to try deleting category' });
        }
    },

}
export default CategoriesController;