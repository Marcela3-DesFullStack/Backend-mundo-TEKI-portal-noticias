import { Router } from "express";
import UsersController from "../controllers/usersController.js";


const UsersRouter = Router();

UsersRouter.route("/users").get(UsersController.getAllUsers);
UsersRouter.route("/users").get(UsersController.getUser);

export default UsersRouter;
