import { Router } from "express";
import ImagesController from "../controllers/imagesController.js";


const ImagesRouter = Router();

ImagesRouter.route("/").get(ImagesController.getAllImages);
ImagesRouter.route("/:id").get(ImagesController.getImage);
ImagesRouter.route("/").post(ImagesController.addImage);
ImagesRouter.route("/:id").put(ImagesController.updateImage);
ImagesRouter.route("/:id").delete(ImagesController.deleteImage);

export default ImagesRouter;