import { Router } from "express";
import UsersController from "../controllers/usersController.js";


const UsersRouter = Router();

UsersRouter.route("/").get(UsersController.getAllUsers);
UsersRouter.route("/:id").get(UsersController.getUser);
UsersRouter.route("/").post(UsersController.addUser);
UsersRouter.route("/:id").put(UsersController.updateUser);
UsersRouter.route("/:id").delete(UsersController.deleteUser);

// Login route to POST users
UsersRouter.route("/login").post(UsersController.loginUser);


export default UsersRouter;
