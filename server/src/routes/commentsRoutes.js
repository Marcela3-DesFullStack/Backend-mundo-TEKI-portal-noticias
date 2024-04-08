import { Router } from "express";
import CommentsController from "../controllers/commentsController.js";


const CommentsRouter = Router();

CommentsRouter.route("/").get(CommentsController.getAllComments);
CommentsRouter.route("/:id").get(CommentsController.getComment);
CommentsRouter.route("/:id").delete(CommentsController.deleteComment);

export default CommentsRouter;
