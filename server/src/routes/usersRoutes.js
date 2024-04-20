import { Router } from "express";
import UsersController from "../controllers/usersController.js";
import LoginController from "../controllers/loginController.js";
// import { isAdmin } from "../middlewares/sessionMiddleware.js";
// import { authAdmin } from "../middlewares/sessionMiddleware.js";

const UsersRouter = Router();

UsersRouter.route("/").get( UsersController.getAllUsers);
UsersRouter.route("/:id").get(UsersController.getUser);
UsersRouter.route("/").post(UsersController.addUser);
UsersRouter.route("/:id").put(UsersController.updateUser);
UsersRouter.route("/:id").delete(UsersController.deleteUser);

// Login route to POST users
UsersRouter.route("/login").post(LoginController.loginUser);

// //Admin and Editor routes
// UsersRouter.route("/admin").get( authAdmin, UsersController.getAllUsers);

export default UsersRouter;
