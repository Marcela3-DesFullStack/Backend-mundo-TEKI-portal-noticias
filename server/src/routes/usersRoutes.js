import { Router } from "express";
import UsersController from "../controllers/usersController.js";


const UsersRouter = Router();

UsersRouter.route("/").get(UsersController.getAllUsers);
UsersRouter.route("/:id").get(UsersController.getUser);
UsersRouter.route("/").post(UsersController.addUser);
UsersRouter.route("/").put(UsersController.updateUser);
UsersRouter.route("/").delete(UsersController.deleteUser);
export default UsersRouter;
