import { Router } from "express";
import CategoriesController from "../controllers/categoriesController.js";


const CategoriesRouter = Router();

CategoriesRouter.route("/").get(CategoriesController.getAllCategories);
CategoriesRouter.route("/:id").get(CategoriesController.getCategory);
CategoriesRouter.route("/").post(CategoriesController.addCategory);
CategoriesRouter.route("/:id").put(CategoriesController.updateCategory);
CategoriesRouter.route("/:id").delete(CategoriesController.deleteCategory);

export default CategoriesRouter;