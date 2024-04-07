import { Router } from "express";
import CategoriesController from "../controllers/categoriesController.js";


const CategoriesRouter = Router();

CategoriesRouter.route("/categories").get(CategoriesController.getAllCategories);
CategoriesRouter.route("/categories/:id").get(CategoriesController.getCategory);
CategoriesRouter.route("/categories").post(CategoriesController.addCategory);
CategoriesRouter.route("/categories/:id").put(CategoriesController.updateCategory);
CategoriesRouter.route("/categories/:id").delete(CategoriesController.deleteCategory);

export default CategoriesRouter;