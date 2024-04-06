import { Router } from "express";
import PostsController from "../controllers/postsController.js";


const PostsRouter = Router();

PostsRouter.route("/").get(PostsController.getAllPosts);
PostsRouter.route("/:id").get(PostsController.getPost);
PostsRouter.route("/").post(PostsController.addPost);
PostsRouter.route("/:id").put(PostsController.updatePost);
PostsRouter.route("/:id").delete(PostsController.deletePost);

export default PostsRouter;

